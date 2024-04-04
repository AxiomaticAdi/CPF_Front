import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../components/CheckoutForm";
import ClassesContext from "../contexts/ClassesContext";
import Page from "../components/Page";
import { CookingClass } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import ClassDetailsSection from "../components/ClassDetailsSection";

// Assume you've set your publishable key somewhere
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage: React.FC = () => {
	const { classId, ticketQuantity } = useParams<{
		classId: string;
		ticketQuantity: string;
	}>();
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);
	const ticketQuantityNum = parseInt(ticketQuantity || "0");

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	if (!classId || isNaN(ticketQuantityNum) || ticketQuantityNum < 1) {
		return (
			<Page>
				<p>Error: Invalid URL parameters</p>
			</Page>
		);
	}

	const cookingClass: CookingClass | undefined = cookingClasses.find(
		(c) => c.id === classId
	);

	// Verify that the class ID and ticket quantity are valid
	if (!cookingClass) {
		return (
			<Page>
				<p>Error: Class not found</p>
			</Page>
		);
	}
	const remainingTickets = cookingClass.capacity - cookingClass.sold;
	if (ticketQuantityNum < 1) {
		return (
			<Page>
				<p>Error: Invalid ticket quantity provided</p>
			</Page>
		);
	}
	if (remainingTickets <= 0 || ticketQuantityNum > remainingTickets) {
		return (
			<Page>
				<div className="flex flex-col gap-4 mx-4">
					<p>
						We're sorry! There aren't enough tickets available for{" "}
						{cookingClass.name} on{" "}
						{new Date(cookingClass.startTime).toLocaleDateString("en-US", {})}
					</p>
					<p>Quantity requested: {ticketQuantityNum}</p>
					<p>Remaining tickets: {remainingTickets}</p>
				</div>
			</Page>
		);
	}

	return (
		<Page>
			<h1 className="text-2xl font-bold">Checkout</h1>
			<ClassDetailsSection class={cookingClass} />
			{/* <Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements> */}
		</Page>
	);
};

export default CheckoutPage;
