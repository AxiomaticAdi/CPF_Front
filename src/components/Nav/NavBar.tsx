import WebMenu from "./WebMenu";
import MobileMenu from "./MobileMenu";

export type Link = {
	text: string;
	path: string;
};

export default function Navbar() {
	const links: Link[] = [
		{
			text: "Home",
			path: "/",
		},
		{
			text: "Calendar",
			path: "/calendar",
		},
		{
			text: "Classes",
			path: "/classes",
		},
		{
			text: "About",
			path: "/about",
		},
		{
			text: "FAQ",
			path: "/faq",
		},
		{
			text: "Blog",
			path: "/blog",
		},
	];

	return (
		<nav className="w-full flex my-8 md:my-12">
			<WebMenu links={links} />
			<MobileMenu links={links} />
		</nav>
	);
}
