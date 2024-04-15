import React from "react";
import "../styles/Styles.css";
import NavButton from "./NavButton";

interface HeroProps {
	backgroundImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImageUrl }) => {
	return (
		<div className="relative flex justify-center items-center w-screen min-h-96">
			<img
				src={backgroundImageUrl}
				alt="Background of the hero section"
				className="absolute w-full h-full object-cover z-0"
			/>

			{/* Gradient overlay with absolute positioning */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

			{/* Content container to ensure it sits above the overlay and image */}
			<div className="relative z-10 text-center">
				<h1 className="text-4xl font-bold text-white drop-shadow-md mb-8">
					Farm Fresh Cooking Classes
				</h1>
				<NavButton buttonText="Book now" navigateTo="/classes" />
			</div>
		</div>
	);
};

export default Hero;
