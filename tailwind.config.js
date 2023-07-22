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
      'unhovered-grey': '#a5a5a5',
      'white': '#ffffff',
      'black': '#000000',
      'gradient-pink': '#af2896',
      'gradient-blue': '#5099f3',
    },
    fontSize: {
      'preview': '0.75',
      sm: '0.8rem',
      md: '1rem',
      xl: '1.25rem',
      'smd': '1.3',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {width: {
      'navSize': '280px',
    }},
  },
  plugins: [],
}