import React from "react";
import "../styles/Styles.css";

interface HeroProps {
	backgroundImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImageUrl }) => {
	return (
		// Outer container with relative positioning to contain the image and overlay
		<div
			className="relative flex justify-center items-center w-screen min-h-96 bg-cover bg-center"
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}
		>
			{/* Gradient overlay with absolute positioning */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

			{/* Content container to ensure it sits above the overlay */}
			<div className="relative z-10 text-center">
				<h1 className="text-4xl font-bold text-white drop-shadow-md mb-8">
					Farm Fresh Cooking Classes
				</h1>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Upcoming events
				</button>
			</div>
		</div>
	);
};

export default Hero;
