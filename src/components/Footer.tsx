import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="w-full pb-4 pt-24 flex justify-between text-xs sm:text-sm text-gray-400 items-center">
			<div className="text-left">
				<p>Copyright © 2024. All rights reserved.</p>
			</div>
			<div className="flex justify-end flex-wrap gap-2 items-center text-right">
				<p>Connect with us!</p>
				<div className="flex gap-2">
					<Link to={"https://www.facebook.com/profile.php?id=100094433604365"}>
						<img
							src="https://cdn.svgporn.com/logos/facebook.svg"
							alt="Facebook logo"
							className="h-6 w-6 filter grayscale"
						/>
					</Link>
					<Link to={"https://www.facebook.com/profile.php?id=100094433604365"}>
						<img
							src="https://cdn.svgporn.com/logos/instagram-icon.svg"
							alt="Instagram logo"
							className="h-6 w-6 filter grayscale"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}
