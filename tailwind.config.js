/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			colors: {
				dasar: "#FF78C4",
				ungu: "#E1AEFF",
				"text-abu": "#535F6C",
				"red-icon": "#F96C6C",
			},
		},
	},
	plugins: [],
};
