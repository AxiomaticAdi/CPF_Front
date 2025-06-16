import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="w-full pb-4 pt-24 flex flex-col text-gray-400">
			<div className="flex justify-between">
				<div className="flex flex-col text-left">
					<div className="text-xs sm:text-sm">
						15775 Castle Peak Lane, Jamul, CA 91935
					</div>
					<Link to={"/legal"} className="text-xs sm:text-sm text-blue-400">
						Legal Notices
					</Link>
				</div>

				<div className="flex justify-end flex-wrap gap-2 items-center text-right">
					<div className="flex gap-2">
						<a href="https://www.facebook.com/profile.php?id=100094433604365" target="_blank" rel="noopener noreferrer">
							<img
								src="https://cdn.svgporn.com/logos/facebook.svg"
								alt="Facebook logo"
								className="h-6 w-6 filter grayscale"
							/>
						</a>
						<a href="https://www.instagram.com/castlepeakfarmsd/" target="_blank" rel="noopener noreferrer">
							<img
								src="https://cdn.svgporn.com/logos/instagram-icon.svg"
								alt="Instagram logo"
								className="h-6 w-6 filter grayscale"
							/>
						</a>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-center text-xs text-gray-400 font-light items-center mt-4 italic">
				<p className="flex flex-wrap justify-center">
					<span className="mr-1">© 2024 Aditya Rudra Web Designs.</span>
					<span>All rights reserved</span>
				</p>
			</div>
		</footer>
	);
}
