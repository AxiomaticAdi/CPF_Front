import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { useContext, useState } from "react";
import ClassesContext from "../contexts/ClassesContext";
import LoadingSpinner from "../components/LoadingSpinner";
import TicketDropdown from "../components/TicketDropdown";
import { CookingClass } from "../types";

export default function ClassDetailsPage() {
	const { classId } = useParams<{ classId: string }>();
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);
	const [ticketQuantity, setTicketQuantity] = useState(1);
	const [isReserving, setIsReserving] = useState(false);

	// Find the class as soon as possible, without conditional logic
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

	if (!classId || !cookingClass) {
		return (
			<Page>
				<p>{!classId ? "No class ID provided" : "Class not found"}</p>
			</Page>
		);
	}

	const handleReserve = () => {
		if (cookingClass.sold < cookingClass.capacity) {
			setIsReserving(true);
			// Simulate a reserve action
			setTimeout(() => {
				alert("Ticket reserved successfully!");
				setIsReserving(false);
			}, 1000);
		} else {
			alert("Sorry, the class is fully booked.");
		}
	};

	const remainingTickets = cookingClass.capacity - cookingClass.sold;

	return (
		<Page>
			<div className="flex flex-col items-center">
				<img
					src={cookingClass.imageUrl}
					alt={cookingClass.name}
					className="w-96 h-60 object-cover mt-4 rounded-md"
				/>
				<h1 className="text-xl font-bold my-4">{cookingClass.name}</h1>
				<p className="text-gray-600 max-w-96 mb-4">
					{cookingClass.description}
				</p>
				<div className="mt-2">
					<div>
						{new Date(cookingClass.startTime).toLocaleDateString("en-US", {
							month: "long",
							day: "numeric",
							year: "numeric",
						})}
					</div>
					<div>
						{new Date(cookingClass.startTime).toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "2-digit",
							hour12: true,
							hourCycle: "h11",
						})}{" "}
						to{" "}
						{new Date(cookingClass.endTime).toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "2-digit",
							hour12: true,
							hourCycle: "h11",
						})}
					</div>
				</div>
				<p>Remaining tickets: {remainingTickets}</p>

				<div className="my-4 flex flex-col">
					<h1 className="text-xl font-bold my-4">Reserve your tickets!</h1>
					<div className="flex justify-center gap-6">
						<TicketDropdown
							remainingTickets={remainingTickets}
							ticketQuantity={ticketQuantity}
							setTicketQuantity={setTicketQuantity}
						/>
						<button
							className="w-full bg-blue-500 shadow-md text-white rounded hover:bg-blue-700"
							onClick={handleReserve}
							disabled={
								isReserving || cookingClass.sold >= cookingClass.capacity
							}
						>
							{isReserving ? "Checking out..." : "Checkout"}
						</button>
					</div>
				</div>
			</div>
		</Page>
	);
}
