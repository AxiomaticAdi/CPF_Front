import React, { ReactNode, useState, useEffect } from "react";
import ClassesContext from "./ClassesContext";
import { CookingClass } from "../types";
import { collection, onSnapshot, query } from "firebase/firestore";
import db from "../config/firebase-config";

interface ClassesProviderProps {
	children: ReactNode;
}

const ClassesProvider: React.FC<ClassesProviderProps> = ({ children }) => {
	const [cookingClasses, setCookingClasses] = useState<CookingClass[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const q = query(collection(db, "Classes"));
		const unsubscribe = onSnapshot(
			q,
			(querySnapshot) => {
				const classes: CookingClass[] = querySnapshot.docs.map((doc) => {
					const data = doc.data();
					return {
						id: doc.id,
						name: data.Name,
						description: data.Description,
						imageUrl: data.ImageUrl,
						startTime: data.StartDateTime.toDate(), // Convert Firestore timestamp to JavaScript Date
						endTime: data.EndDateTime.toDate(), // Convert Firestore timestamp to JavaScript Date
						capacity: data.Capacity,
						sold: data.Sold,
						price: data.Price,
					} as CookingClass;
				});
				setCookingClasses(classes);
				setIsLoading(false);
			},
			(error) => {
				console.error("Error fetching cooking classes:", error);
				setIsLoading(false); // Optionally handle error state
			}
		);

		// Cleanup the listener on component unmount
		return () => unsubscribe();
	}, []);

	return (
		<ClassesContext.Provider value={{ classes: cookingClasses, isLoading }}>
			{children}
		</ClassesContext.Provider>
	);
};

export default ClassesProvider;
