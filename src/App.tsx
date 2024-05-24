import { useContext } from "react";
import EventCard from "./components/EventCard";
import Hero from "./components/Hero";
import Page from "./components/Page";
import EventsContext from "./contexts/EventsContext";
import LoadingSpinner from "./components/LoadingSpinner";
import Testimonials from "./components/Testimonials";
import NavButton from "./components/NavButton";

const bestSellers = [
	"jIr3H0xFlkggDefGrYQi",
	"k6pfJPNuLYasSm2A3pb9",
	"DrPPFQ2SYr4h2Y3KhPf1",
];

function App() {
	const { events: Events, isLoading } = useContext(EventsContext);

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
				<Hero />
				<div className="flex flex-col gap-4">
					<div>
						<h1 className="text-4xl font-bold my-8">Bestsellers</h1>
						<div className="flex flex-wrap gap-8 items-center justify-center mx-auto">
							{Events.map((event) => {
								if (bestSellers.includes(event.id)) {
									return <EventCard key={event.id} event={event} />;
								} else return null;
							})}
						</div>
						<div className="pt-6">
							<NavButton buttonText="More events!" navigateTo="/events" />
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
