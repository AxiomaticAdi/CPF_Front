import { CookingClass } from "../types";
import BadgePrice from "./Badges/BadgePrice";

interface ClassDetailsSectionProps {
	class: CookingClass;
}

export default function ClassDetailsSection({
	class: cookingClass,
}: ClassDetailsSectionProps) {
	const remainingTickets = cookingClass.capacity - cookingClass.sold;
	return (
		<div className="flex flex-col items-center">
			<div className="w-96 h-60 rounded-md relative">
				<img
					src={cookingClass.imageUrl}
					alt={cookingClass.name}
					className="w-full h-full rounded-md object-cover"
				/>
				<BadgePrice price={cookingClass.price} />
			</div>

			<h1 className="text-xl font-bold my-4">{cookingClass.name}</h1>
			<p className="text-gray-600 max-w-96 mb-4">{cookingClass.description}</p>
			<div className="mt-2 font-semibold">
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
			<p>{remainingTickets} remaining tickets</p>
		</div>
	);
}
