import React, { useState } from "react";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import ReservationInfoForm from "./ReservationInfoForm";

export const CheckoutForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const stripe = useStripe();
	const elements = useElements();

	const paymentElementOptions: StripePaymentElementOptions = {
		layout: "tabs",
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		const result = await stripe.confirmPayment({
			// Confirm the payment with the Payment Element.
			elements,
			redirect: "if_required",
		});

		if (result.error) {
			// Show error to your customer (e.g., payment details incomplete)
			console.error(result.error.message);
		} else {
			// The payment has been processed!
			if (result.paymentIntent.status === "succeeded") {
				// Show a success message to your customer
				console.log("Payment succeeded!");
			}
		}
		setIsLoading(false);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<ReservationInfoForm
				name={name}
				email={email}
				setName={setName}
				setEmail={setEmail}
			/>
			<PaymentElement id="payment-element" options={paymentElementOptions} />
			<button
				className="bg-blue-500 shadow-md text-white rounded hover:bg-blue-700 px-4 py-2 mt-4"
				type="submit"
				disabled={!stripe || !elements || isLoading}
			>
				Pay now
			</button>
		</form>
	);
};
