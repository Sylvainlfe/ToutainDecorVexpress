/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color":"#DDC962",
      },
      backgroundImage: {
        "bg-marbre":"url('/src/assets/images/bg-marbre.jpg')"
      }
    },
  },
  plugins: [],
}