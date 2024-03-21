import Navbar from "./Nav/NavBar";

export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center max-w-2xl font-sans mx-auto text-center">
			<div className="flex items-center justify-center w-full">
				<Navbar />
			</div>
			{children}
		</div>
	);
}
