import { Link } from "react-router-dom";
import { CookingClass } from "../types";
import BadgeSoldOut from "./Badges/BadgeSoldOut";

interface ClassCardProps {
	cookingClass: CookingClass;
}

export default function ClassCard({ cookingClass }: ClassCardProps) {
	const isSoldOut: boolean = cookingClass.capacity - cookingClass.sold < 1;

	return (
		<Link to={`/classes/${cookingClass.id}`}>
			<div className="relative flex flex-col items-center justify-center h-96 w-64 rounded-md overflow-hidden hover:scale-105">
				<BadgeSoldOut isSoldOut={isSoldOut} />
				<img
					src={cookingClass.imageUrl}
					alt="Class"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				{/* Gradient Overlay */}
				<div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent">
					<div className="flex h-full justify-center items-end py-4">
						<h1 className="text-xl font-bold text-white">
							{cookingClass.name}
						</h1>
					</div>
				</div>
			</div>
		</Link>
	);
}
