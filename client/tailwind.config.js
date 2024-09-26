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
        "bg-light-color": "#FFFFC7",
        "bg-dark-color": "#473335",
      },
      backgroundImage: {
        "bg-marbre":"url('/src/assets/images/bg-marbre.jpg')"
      },
      fontFamily: {
        "logo-font": ["BonheurRoyal", "sans-serif"],
      },
    },
  },
  plugins: [],
}