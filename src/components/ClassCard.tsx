import { Link } from "react-router-dom";
import { CookingClass } from "../types";

interface ClassCardProps {
	cookingClass: CookingClass;
}

export default function ClassCard({ cookingClass }: ClassCardProps) {
	return (
		<Link to={`/classes/${cookingClass.id}`}>
			<div className="relative flex flex-col items-center justify-center h-96 w-64 rounded-md overflow-hidden hover:scale-105">
				<img
					src={cookingClass.imageUrl}
					alt="Class"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="relative z-10 flex flex-col items-center justify-end h-full mx-4">
					<button className="bg-mountain-stone w-full text-white rounded-md text-xl m-4">
						{cookingClass.name}
					</button>
				</div>
			</div>
		</Link>
	);
}
