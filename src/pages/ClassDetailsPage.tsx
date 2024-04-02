import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { useContext, useState } from "react";
import ClassesContext from "../contexts/ClassesContext";
import { CookingClass } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ClassDetailsPage() {
	const { classId } = useParams<{ classId: string }>();
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	if (!classId) {
		return (
			<Page>
				<p>No class ID provided</p>
			</Page>
		);
	}

	const cookingClass: CookingClass = cookingClasses.find(
		(c) => c.id === classId
	)!;

	const [isReserving, setIsReserving] = useState(false);

	const handleReserve = () => {
		if (cookingClass && cookingClass.sold < cookingClass.capacity) {
			setIsReserving(true);
			// Simulate a reserve action
			setTimeout(() => {
				alert("Spot reserved successfully!");
				setIsReserving(false);
			}, 1000);
		} else {
			alert("Sorry, the class is fully booked.");
		}
	};

	if (!cookingClass) {
		return (
			<Page>
				<p>Class not found</p>
			</Page>
		);
	}

	return (
		<Page>
			<div className="flex flex-col items-center">
				<img
					src={cookingClass.imageUrl}
					alt={cookingClass.name}
					className="w-96 h-60 object-cover mt-4 rounded-md"
				/>
				<h1 className="text-xl font-bold my-4">{cookingClass.name}</h1>
				<p className="text-gray-600">{cookingClass.description}</p>
				<p className="mt-2">
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
				</p>
				<p>Available spots: {cookingClass.capacity - cookingClass.sold}</p>
				<button
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
					onClick={handleReserve}
					disabled={isReserving || cookingClass.sold >= cookingClass.capacity}
				>
					{isReserving ? "Reserving..." : "Reserve Your Spot"}
				</button>
			</div>
		</Page>
	);
}
