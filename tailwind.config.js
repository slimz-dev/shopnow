/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff49db',
			},
			fontFamily: {
				sans: ['Helvetica', 'Arial', 'sans-serif'],
			},
			fontSize: {
				clamp: 'clamp(1rem, 5vw + 0.2rem, 3rem)',
			},
			screens: {
				xs: '420px',
				lg: '1080px',
			},
			keyframes: {
				expand: {
					'0%': { height: '0' },
					'100%': { height: '100% ' },
				},
				collapse: {
					'0%': { height: '100%' },
					'100%': { height: '0' },
				},
			},
			animation: {
				expand: 'expand 0.5s ease-out forwards',
				collapse: 'collapse 0.5s ease-out forwards',
			},
		},
	},
	plugins: [],
};
