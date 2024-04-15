import { useContext } from "react";
import ClassCard from "../components/ClassCard";
import Page from "../components/Page";
import ClassesContext from "../contexts/ClassesContext";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ClassesPage() {
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);

	return (
		<Page>
			<div className="flex flex-col items-center gap-8 mb-48">
				<h1 className="text-4xl font-bold my-8">Upcoming classes</h1>
				<div className="flex flex-wrap gap-8 items-center justify-center">
					{isLoading ? (
						<LoadingSpinner />
					) : (
						cookingClasses.map((cookingClass) => (
							<ClassCard key={cookingClass.id} cookingClass={cookingClass} />
						))
					)}
				</div>
			</div>
		</Page>
	);
}
