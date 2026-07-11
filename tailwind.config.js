/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          primary: '#4c1d95', // Deep violet/purple
          accent: '#7c3aed',  // Lighter violet for hovers
        }
      }
    },
  },
  plugins: [],
}