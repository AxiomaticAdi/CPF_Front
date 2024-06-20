import React from "react";
import DOMPurify from "dompurify"; // Import DOMPurify
import { Event } from "../types";
import BadgePrice from "./Badges/BadgePrice";

interface EventDetailsSectionProps {
	event: Event;
}

export default function EventDetailsSection({
	event: event,
}: EventDetailsSectionProps) {
	const remainingTickets = event.capacity - event.sold;

	// Sanitize the HTML content before rendering
	const sanitizedDescription = DOMPurify.sanitize(event.description);

	return (
		<div className="flex flex-col items-center">
			<div className="w-80 sm:w-96 h-60 rounded-md relative">
				<img
					src={event.imageUrl}
					alt={event.name}
					className="w-full h-full rounded-md object-cover"
				/>
				<BadgePrice price={event.price} />
			</div>

			<h1 className="text-xl font-bold my-4">{event.name}</h1>
			{/* Render sanitized HTML */}
			<div
				className="text-gray-600 max-w-96 mb-4 prose text-left"
				dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
			></div>
			<div className="mt-2 font-semibold">
				<div>
					{new Date(event.startTime).toLocaleDateString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric",
					})}
				</div>
				<div>
					{new Date(event.startTime).toLocaleTimeString("en-US", {
						hour: "numeric",
						minute: "2-digit",
						hour12: true,
						hourCycle: "h11",
					})}{" "}
					to{" "}
					{new Date(event.endTime).toLocaleTimeString("en-US", {
						hour: "numeric",
						minute: "2-digit",
						hour12: true,
						hourCycle: "h11",
					})}
				</div>
			</div>
			<p>{remainingTickets} remaining tickets</p>
		</div>
	);
}
