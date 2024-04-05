import { useParams, useNavigate } from "react-router-dom";
import Page from "../components/Page";
import { useContext, useState } from "react";
import ClassesContext from "../contexts/ClassesContext";
import LoadingSpinner from "../components/LoadingSpinner";
import TicketDropdown from "../components/TicketDropdown";
import { CookingClass } from "../types";
import ClassDetailsSection from "../components/ClassDetailsSection";
import TicketSelect from "../components/TicketSelect";

export default function ClassDetailsPage() {
	const { classId } = useParams<{ classId: string }>();
	const navigate = useNavigate();
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);
	const [ticketQuantity, setTicketQuantity] = useState(1);
	const [isReserving, setIsReserving] = useState(false);

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
			// Navigate to checkout page after setting reservation state
			setTimeout(() => {
				navigate(`/checkout/${classId}/${ticketQuantity}`);
				setIsReserving(false);
			}, 1000); // Simulating a reserve action
		} else {
			alert("Sorry, the class is fully booked.");
		}
	};

	const remainingTickets = cookingClass.capacity - cookingClass.sold;

	return (
		<Page>
			<div className="flex flex-col items-center">
				<ClassDetailsSection class={cookingClass} />
				<div className="my-4 flex flex-col">
					<h1 className="text-xl font-bold my-4">Reserve your tickets!</h1>
					<div className="flex justify-center gap-6">
						<TicketDropdown
							remainingTickets={remainingTickets}
							ticketQuantity={ticketQuantity}
							setTicketQuantity={setTicketQuantity}
						/>
						<TicketSelect
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
				<div className="py-10"></div>
			</div>
		</Page>
	);
}
