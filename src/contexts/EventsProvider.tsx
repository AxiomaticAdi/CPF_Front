import React, { ReactNode, useState, useEffect } from "react";
import EventsContext from "./EventsContext";
import { Event } from "../types";
import {
	collection,
	onSnapshot,
	query,
	where,
	orderBy,
} from "firebase/firestore";
import db from "../config/firebase-config";

interface EventsProviderProps {
	children: ReactNode;
}

const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
	const [events, setEvents] = useState<Event[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const now = new Date();

		// Only fetch future events, and order by time
		const q = query(
			collection(db, "Events"),
			where("EndDateTime", ">", now),
			orderBy("EndDateTime")
		);

		const unsubscribe = onSnapshot(
			q,
			(querySnapshot) => {
				const events: Event[] = querySnapshot.docs.map((doc) => {
					const data = doc.data();
					return {
						id: doc.id,
						name: data.Name,
						description: data.Description,
						imageUrl: data.ImageUrl,
						startTime: data.StartDateTime.toDate(),
						endTime: data.EndDateTime.toDate(),
						capacity: data.Capacity,
						sold: data.Sold,
						price: data.Price,
					} as Event;
				});

				setEvents(events);
				setIsLoading(false);
			},
			(error) => {
				console.error("Error fetching events:", error);
				setIsLoading(false);
			}
		);

		return () => unsubscribe();
	}, []);

	return (
		<EventsContext.Provider value={{ events, isLoading }}>
			{children}
		</EventsContext.Provider>
	);
};

export default EventsProvider;
