import WebMenu from "./WebMenu";
import MobileMenu from "./MobileMenu";

export type CustomLink = {
	text: string;
	path: string;
};

export default function Navbar() {
	const links: CustomLink[] = [
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
