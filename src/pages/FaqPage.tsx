import Page from "../components/Page";

export default function FaqPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">FAQ</h1>

			<div className="flex flex-col gap-6 items-center text-center text-pretty">
				<div>
					<h2 className="text-xl font-semibold">Are tickets refundable?</h2>
					<p className="max-w-xl">
						Tickets are non-refundable. However, if you can’t make the dinner,
						you are welcome to give or resell your tickets to someone else.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">
						Do you offer private cooking classes?
					</h2>
					<p className="max-w-xl">
						Yes, we offer private cooking classes for individuals and groups.
						Please contact us at
						<span className="text-blue-500 underline cursor-pointer">
							{" "}
							dvalentinecpf@gmail.com
						</span>{" "}
						for more details and to schedule a session.
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
				'
			</div>
		</Page>
	);
}
