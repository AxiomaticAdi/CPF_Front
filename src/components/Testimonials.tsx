const testimonials = [
	[
		[
			{
				body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
				author: {
					name: "Leslie Alexander",
					handle: "lesliealexander",
					imageUrl:
						"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			},
			// More testimonials...
		],
		[
			{
				body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
				author: {
					name: "Lindsay Walton",
					handle: "lindsaywalton",
					imageUrl:
						"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			},
			// More testimonials...
		],
	],
	[
		[
			{
				body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
				author: {
					name: "Tom Cook",
					handle: "tomcook",
					imageUrl:
						"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			},
			// More testimonials...
		],
		[
			{
				body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
				author: {
					name: "Leonard Krasner",
					handle: "leonardkrasner",
					imageUrl:
						"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			},
			// More testimonials...
		],
	],
];

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
				{testimonials.map((columnGroup, columnGroupIdx) => (
					<div
						key={columnGroupIdx}
						className="space-y-8 xl:contents xl:space-y-0"
					>
						{columnGroup.map((column, columnIdx) => (
							<div
								key={columnIdx}
								className={classNames(
									(columnGroupIdx === 0 && columnIdx === 0) ||
										(columnGroupIdx === testimonials.length - 1 &&
											columnIdx === columnGroup.length - 1)
										? "xl:row-span-2"
										: "xl:row-start-1",
									"space-y-8"
								)}
							>
								{column.map((testimonial) => (
									<figure
										key={testimonial.author.handle}
										className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
									>
										<blockquote className="text-gray-900">
											<p>{`“${testimonial.body}”`}</p>
										</blockquote>
										<figcaption className="mt-6 flex items-center gap-x-4">
											<img
												className="h-10 w-10 rounded-full bg-gray-50"
												src={testimonial.author.imageUrl}
												alt=""
											/>
											<div>
												<div className="font-semibold">
													{testimonial.author.name}
												</div>
												<div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
											</div>
										</figcaption>
									</figure>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
