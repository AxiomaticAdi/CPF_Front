import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../components/CheckoutForm";
import ClassesContext from "../contexts/ClassesContext";
import Page from "../components/Page";
import { CookingClass } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

// Assume you've set your publishable key somewhere
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage: React.FC = () => {
	const { classId, ticketQuantity } = useParams<{
		classId: string;
		ticketQuantity: string;
	}>();
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);

	if (!classId || !ticketQuantity) {
		return (
			<Page>
				<p>Error: Invalid URL parameters</p>
			</Page>
		);
	}
	const ticketQuantityNum = parseInt(ticketQuantity);

	const cookingClass: CookingClass | undefined = cookingClasses.find(
		(c) => c.id === classId
	);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

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
	if (remainingTickets <= 0) {
		return (
			<Page>
				<p>We're sorry - this class is sold out!</p>
			</Page>
		);
	}
	if (ticketQuantityNum > remainingTickets) {
		return (
			<Page>
				<p>We're sorry - there are not enough tickets left for this class!</p>
			</Page>
		);
	}

	return (
		<Page>
			<h1 className="text-2xl font-bold">Checkout</h1>

			{/* <Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements> */}
		</Page>
	);
};

export default CheckoutPage;
