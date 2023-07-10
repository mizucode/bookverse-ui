/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			colors: {
				dasar: "#FF78C4",
				ungu: "#E1AEFF",
			},
		},
	},
	plugins: [],
};
