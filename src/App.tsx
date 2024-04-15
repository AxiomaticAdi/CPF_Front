import { useContext } from "react";
import ClassCard from "./components/ClassCard";
import Hero from "./components/Hero";
import Page from "./components/Page";
import ClassesContext from "./contexts/ClassesContext";
import LoadingSpinner from "./components/LoadingSpinner";
import Testimonials from "./components/Testimonials";
import NavButton from "./components/NavButton";

const heroImageUrl =
	"https://res.cloudinary.com/djxfhec23/image/upload/v1713051912/CPF/veggies_vczxpb.webp";

const bestSellers = [
	"jIr3H0xFlkggDefGrYQi",
	"k6pfJPNuLYasSm2A3pb9",
	"DrPPFQ2SYr4h2Y3KhPf1",
];

function App() {
	const { classes: cookingClasses, isLoading } = useContext(ClassesContext);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<div className="flex flex-col items-center gap-8 mb-48">
				<Hero backgroundImageUrl={heroImageUrl} />
				<div className="flex flex-col gap-4">
					<div>
						<h1 className="text-4xl font-bold my-8">Bestsellers</h1>
						<div className="flex flex-wrap gap-8 items-center justify-center mx-auto">
							{cookingClasses.map((cookingClass) => {
								if (bestSellers.includes(cookingClass.id)) {
									return (
										<ClassCard
											key={cookingClass.id}
											cookingClass={cookingClass}
										/>
									);
								} else return null;
							})}
						</div>
						<div className="pt-6">
							<NavButton buttonText="More classes!" navigateTo="/classes" />
						</div>
					</div>
					<div className="pt-4">
						<h1 className="text-4xl font-bold mt-8">Happy, full customers</h1>
						<Testimonials />
					</div>
				</div>
			</div>
		</Page>
	);
}

export default App;
