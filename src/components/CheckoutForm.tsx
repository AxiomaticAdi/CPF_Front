import React from "react";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

export const CheckoutForm: React.FC = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

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
	};

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement />
			<button type="submit" disabled={!stripe || !elements}>
				Pay now
			</button>
		</form>
	);
};
