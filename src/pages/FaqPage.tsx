import Page from "../components/Page";

export default function FaqPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">FAQ</h1>

			<div className="flex flex-col gap-6 items-center text-center text-pretty">
				<div>
					<h2 className="text-xl font-semibold">Do you host private events?</h2>
					<p className="max-w-xl">
						YES! All the time.{" "}
						<a
							className="text-blue-500 underline cursor-pointer"
							href="mailto:dvalentinecpf@gmail.com"
						>
							Contact us
						</a>{" "}
						if you would like to host a private dinner or class here at the
						farm. We also have hosted birthday parties, team-building events,
						and baby showers. We would love to work with you to design a
						culinary event that fits your exact needs.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						Do you cater off-site events?
					</h2>
					<p className="max-w-xl">
						We have been in the catering business for 10 years. We can
						personalize a menu for a group from 2-150 people. Also, our
						wood-fired pizza oven is mobile. We can bring it to your house or
						workplace and host a party there.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						Can I take a tour of the farm when I come for a class or dinner?
					</h2>
					<p className="max-w-xl">
						We would love that! Please stick around after the class or dinner
						and let us walk you around the farm. We have only been building the
						farm since the summer of 2023 and we would love to show you our
						progress and our future plans.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">What should I wear?</h2>
					<p className="max-w-xl">
						This is a farm. Please wear shoes that you don't mind getting dirty
						if you choose to tour the property and bring a jacket or sweater for
						evening events. It tends to get chilly and a little windy as the sun
						sets here on the mountain.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						What if I can't make the dinner or class I purchased tickets for?
					</h2>
					<p className="max-w-xl">
						Tickets are non-refundable but as long as you give us 48-hour
						notice, you can transfer your tickets to another event or date. You
						are also welcome to gift or sell your tickets to someone else. Less
						than 48-hour notice, and your ticket may be voided. We only sell a
						very limited number of tickets and we start buying ingredients 48
						hours prior to each event.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						What if I have dietary restrictions?
					</h2>
					<p className="max-w-xl">
						Please contact us as soon as you buy tickets if you have a dietary
						restriction. Chef Mark will make substitutions if possible. I also
						reach out to each person that signs up to attend to inquire about
						food allergies. We can be flexible as long as we are aware.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						Do you serve alcohol with your dinners?
					</h2>
					<p className="max-w-xl">
						We don't have a beer and wine license YET so we are not able to sell
						alcohol. However, please feel free to bring a bottle for yourself
						and the people attending with you. We do not charge a corkage fee.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">What if it rains?</h2>
					<p className="max-w-xl">
						We do dine and hold classes outdoors (that view is amazing!). So if
						the forecast calls for inclement weather, as it rarely but
						occasionally does in Southern California, we will contact you to
						reschedule.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						Do you grow all the vegetables?
					</h2>
					<p className="max-w-xl">
						We can't grow everything we serve but if we haven't grown it here at
						CPF, we do our best to source fresh veggies and other ingredients
						from other local farms.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						Is the meat raised on your farm?
					</h2>
					<p className="max-w-xl">
						The simple answer is no. I am a huge animal lover and have been
						active in dog rescue for many, many years. We do hope to have
						livestock on the farm in the near future but Mark and I have agreed
						that we just could never slaughter and eat a baby that we raised. No
						offense to those that do and we are both meat eaters...we just fall
						in love with our animals too fast to eat them. We would love to take
						in livestock that need a new home for a variety of reasons; neglect,
						abandonment, people financially unable to care for them, etc.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">What about the eggs?</h2>
					<p className="max-w-xl">
						Yes, we serve the fresh eggs our chickens and ducks lay.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">Are tickets refundable?</h2>
					<p className="max-w-xl">
						Tickets are non-refundable. However, if you can’t make the dinner,
						you are welcome to give or resell your tickets to someone else.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold">How can I contact you?</h2>
					<p className="max-w-xl">
						If you have any questions or need further assistance, please reach
						out to us at:{" "}
						<span className="text-blue-500 underline cursor-pointer">
							{" "}
							dvalentinecpf@gmail.com
						</span>{" "}
					</p>
				</div>
			</div>
		</Page>
	);
}
