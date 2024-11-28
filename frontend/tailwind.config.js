/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: { customGray: '#E1E2E2',customBlack: '#1d2228',customOrange: '#fb8122',orangeLight: '#fb9039', customTan: '#B68D40', customCharcol:'#122620', costomGold:'#D6AD60', puce:'#56453E', cbrown:'#211C1D'}
		},
	},
	plugins: [],
};
