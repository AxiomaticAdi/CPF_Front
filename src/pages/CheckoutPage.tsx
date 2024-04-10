import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import ClassesContext from "../contexts/ClassesContext";
import Page from "../components/Page";
import { CookingClass } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import ClassDetailsSection from "../components/ClassDetailsSection";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage: React.FC = () => {
	const { classId, ticketQuantity } = useParams<{
		classId: string;
		ticketQuantity: string;
	}>();
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);
	const [clientSecret, setClientSecret] = useState<string | null>(null);

	const ticketQuantityNum = parseInt(ticketQuantity || "0");

	useEffect(() => {
		const fetchPaymentIntent = async () => {
			const response = await fetch(
				"http://localhost:3000/create-payment-intent",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ classId, numTickets: ticketQuantityNum }),
				}
			);
			const data = await response.json();
			setClientSecret(data.clientSecret);
		};

		if (classId && ticketQuantityNum > 0) {
			fetchPaymentIntent();
		}
	}, [classId, ticketQuantityNum]);

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

	console.log(clientSecret || "Client secret is null");

	if (!clientSecret) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<h1 className="text-4xl font-bold">Checkout</h1>
			<p className="my-2">Requested tickets: {ticketQuantityNum}</p>
			<div className="flex flex-wrap gap-4 my-6">
				<div className="flex flex-col gap-4 mx-4 md:w-96">
					<Elements stripe={stripePromise} options={{ clientSecret }}>
						<CheckoutForm
							classId={classId}
							ticketQuantity={ticketQuantityNum}
							clientSecret={clientSecret}
						/>
					</Elements>
				</div>

				<div className="flex flex-col gap-4 mx-4 md:w-96">
					<ClassDetailsSection class={cookingClass} />
				</div>
			</div>
		</Page>
	);
};

export default CheckoutPage;
