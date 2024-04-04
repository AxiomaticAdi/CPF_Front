import { CookingClass } from "../types";

interface ClassDetailsSectionProps {
	class: CookingClass;
}

export default function ClassDetailsSection({
	class: cookingClass,
}: ClassDetailsSectionProps) {
	const remainingTickets = cookingClass.capacity - cookingClass.sold;
	return (
		<div className="flex flex-col items-center">
			<img
				src={cookingClass.imageUrl}
				alt={cookingClass.name}
				className="w-96 h-60 object-cover mt-4 rounded-md"
			/>
			<h1 className="text-xl font-bold my-4">{cookingClass.name}</h1>
			<p className="text-gray-600 max-w-96 mb-4">{cookingClass.description}</p>
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
		</div>
	);
}
