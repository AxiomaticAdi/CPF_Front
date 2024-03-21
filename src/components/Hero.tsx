import React from "react";
import "../styles/Styles.css";

interface HeroProps {
	backgroundImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImageUrl }) => {
	return (
		<div
			className="flex flex-col justify-center items-center bg-cover bg-center w-screen min-h-56"
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}
		>
			<h1 className="text-4xl font-bold text-black drop-shadow-white mb-8">
				Reserve your class
			</h1>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Book now
			</button>
		</div>
	);
};

export default Hero;
