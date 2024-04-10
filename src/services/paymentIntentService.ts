export async function updatePaymentIntent(
	clientSecret: string,
	customerName: string,
	customerEmail: string
): Promise<void> {
	console.log("Updating payment intent...");
	const url = "http://localhost:3000/update-payment-intent";
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			clientSecret: clientSecret,
			name: customerName,
			email: customerEmail,
		}),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log("Payment intent updated");
}
