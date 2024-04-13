import Page from "../components/Page";

export default function OrderSuccessPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">Order complete</h1>
			<img className="w-96 rounded-md" src="/order_complete.png" />
			<div className="flex flex-col gap-2 text-gray-600 max-w-96">
				<p>
					Thank you for your purchase. We are excited to get cooking with you
					soon!
				</p>
				<p>A receipt has been sent directly to your email.</p>
			</div>
		</Page>
	);
}
