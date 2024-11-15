/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"rich-black": "#0D0D0D",
				"barn-red": "#AB2524",
				"field-green": "#486B29",
				"sky-blue": "#7EA4B3",
				"golden-yellow": "#F2B705",
				"cloud-white": "#FCF8F3",
				"mountain-stone": "#3E3A35",
			},
		},
	},
	plugins: [forms, typography],
};
