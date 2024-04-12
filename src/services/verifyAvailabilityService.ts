export async function verifyClassAvailability(
	classId: string,
	ticketQuantityStr: string
): Promise<boolean> {
	console.log("Verifying class availability...");
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/verify-class-availability`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				classId: classId,
				ticketQuantityStr: ticketQuantityStr,
			}),
		}
	);

	if (!response.ok) {
		console.log("Error verifying class availability");
		return false;
	}

	console.log("Class availability verified");
	return true;
}
