import Navbar from "./Nav/NavBar";

export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center max-w-4xl font-sans mx-auto text-center px-4 pb-8">
			<div className="flex items-center justify-center w-full">
				<Navbar />
			</div>
			{children}
		</div>
	);
}
