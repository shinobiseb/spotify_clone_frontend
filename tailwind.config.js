/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-black': '#121212',
      'nav-bg-grey': '#242424',
      'div-bg-grey': '#151515',
      'text-grey': '#a2a2a2',
      'unhovered-grey': '#a5a5a5'
    },
    extend: {},
  },
  plugins: [],
}