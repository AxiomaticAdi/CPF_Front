import db from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { CookingClass } from "../types";

export async function fetchCookingClasses(): Promise<CookingClass[]> {
	console.log("Fetching cooking classes...");
	const classesCollection = collection(db, "Classes");
	console.log("Line 1");

	try {
		const snapshot = await getDocs(classesCollection);
		console.log("Line 2");
		const classes: CookingClass[] = [];
		console.log("Line 3");

		snapshot.forEach((doc) => {
			const data = doc.data();
			const classItem: CookingClass = {
				id: data.ClassId,
				name: data.Name,
				description: data.Description,
				imageUrl: data.ImageUrl,
				startTime: new Date(data.StartDateTime),
				endTime: new Date(data.EndDateTime),
				capacity: data.Capacity,
				sold: data.Sold,
			};
			classes.push(classItem);
		});

		return classes;
	} catch (error) {
		console.error("Error fetching cooking classes:", error);
		throw error; // rethrow the error after logging, or handle it as needed
	}
}
