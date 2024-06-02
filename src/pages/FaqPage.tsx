import Page from "../components/Page";

export default function FaqPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">FAQ</h1>

			<div className="flex flex-col gap-6 text-center items-center">
				<div>
					<h2 className="text-xl font-semibold">Are tickets refundable?</h2>
					<p className="max-w-xl">
						Tickets are non-refundable. However, if you can’t make the dinner,
						you are welcome to give or resell your tickets to someone else.
					</p>
				</div>
			</div>
		</Page>
	);
}
