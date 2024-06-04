import { Link } from "react-router-dom";
import Page from "../../components/Page";

export default function LegalPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">Legal Notices</h1>
			<div className="flex flex-col gap-6">
				<Link to={`/legal/privacy`} className="text-blue-500">
					Privacy Policy
				</Link>
				<Link to={`/legal/terms`} className="text-blue-500">
					Terms of Use
				</Link>
			</div>
		</Page>
	);
}
