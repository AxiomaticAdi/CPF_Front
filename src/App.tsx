import React, { useEffect, useState } from "react";
import ClassCard from "./components/ClassCard";
import Hero from "./components/Hero";
import Page from "./components/Page";
import { fetchCookingClasses } from "./services/fetchClassesService";
import { CookingClass } from "./types";

const heroImageUrl =
	"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const videoHeroUrl =
	"https://res.cloudinary.com/djxfhec23/video/upload/v1711001488/CPF/foodvideo_a7dvrp.mp4";

function App() {
	const [cookingClasses, setCookingClasses] = useState<CookingClass[]>([]);

	useEffect(() => {
		fetchCookingClasses().then(setCookingClasses);
	}, []);

	return (
		<Page>
			<div className="flex flex-col items-center gap-8 mb-48">
				<Hero backgroundImageUrl={heroImageUrl} />
				<div className="flex flex-col">
					<h1 className="text-4xl font-bold my-8">Upcoming classes</h1>
					<div className="flex flex-wrap gap-8 max-w-2xl items-center justify-center">
						{cookingClasses.map((cookingClass) => (
							<ClassCard
								key={cookingClass.id}
								classTitle={cookingClass.name}
								imageUrl={cookingClass.imageUrl}
							/>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
}

export default App;
