import { useContext, useState } from "react";
import Calendar from "react-calendar";
import Page from "../components/Page";
import { compareDates } from "../logic/dateLogic";

import "../styles/Calendar.css";
import ClassCard from "../components/ClassCard";
import ClassesContext from "../contexts/ClassesContext";
import LoadingSpinner from "../components/LoadingSpinner";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarPage() {
	const [value, onChange] = useState<Value>(new Date());
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);

	interface TileContentProps {
		activeStartDate: Date;
		date: Date;
		view: string;
	}

	const decorateClassDates = ({ date, view }: TileContentProps) => {
		if (view !== "month") return false;

		let dayHasClass = false;

		for (let i = 0; i < cookingClasses.length; i++) {
			const classDate = cookingClasses[i].startTime;
			if (compareDates(date, classDate)) {
				dayHasClass = true;
				break;
			}
		}
		return !dayHasClass;
	};

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<h1 className="text-4xl font-bold my-8">Class Calendar</h1>
			<Calendar
				onChange={onChange}
				value={value}
				defaultView="month"
				tileDisabled={decorateClassDates}
			/>
			<div className="flex flex-row flex-wrap gap-4 my-8">
				{value instanceof Date &&
					cookingClasses
						.filter((cookingClass) => {
							const classDate = cookingClass.startTime;
							return (
								classDate.getFullYear() === value.getFullYear() &&
								classDate.getMonth() === value.getMonth() &&
								classDate.getDate() === value.getDate()
							);
						})
						.map((cookingClass) => (
							<ClassCard
								key={cookingClass.id}
								classId={cookingClass.id}
								classTitle={cookingClass.name}
								imageUrl={cookingClass.imageUrl}
							/>
						))}
			</div>
		</Page>
	);
}
