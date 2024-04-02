import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import Page from "../components/Page";
import { compareDates } from "../logic/dateLogic";

import { fetchCookingClasses } from "../services/fetchClassesService";

import "../styles/Calendar.css";
import ClassCard from "../components/ClassCard";
import { CookingClass } from "../types";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarPage() {
	const [value, onChange] = useState<Value>(new Date());
	const [cookingClasses, setCookingClasses] = useState<CookingClass[]>([]);

	useEffect(() => {
		fetchCookingClasses().then(setCookingClasses);
	}, []);

	interface TileContentProps {
		activeStartDate: Date;
		date: Date;
		view: string;
	}

	const decorateClassDates = ({ date }: TileContentProps) => {
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

	return (
		<Page>
			<h1 className="text-4xl font-bold my-8">Class Calendar</h1>
			<Calendar
				onChange={onChange}
				value={value}
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
								classTitle={cookingClass.title}
								imageUrl={cookingClass.imageUrl}
							/>
						))}
			</div>
		</Page>
	);
}
