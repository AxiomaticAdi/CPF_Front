import Page from "../components/Page";

export default function OrderSuccessPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">Order complete</h1>
			<img className="w-96 rounded-md" src="/order_complete.png" />
			<div className="flex flex-col gap-6 text-gray-600 max-w-96">
				<p>
					Thank you for your purchase. A receipt has been sent directly to your
					email. We are excited to get cooking with you soon!
				</p>
				<p>
					If you have any questions or need further assistance, please reach out
					to us at:{" "}
					<span className="text-blue-500 underline cursor-pointer">
						{" "}
						dvalentinecpf@gmail.com
					</span>{" "}
				</p>
			</div>
		</Page>
	);
}
