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
        "light-color": "#FAFAFA",
        "bg-dark-color": "#473335",
        "gold-color": "#DDC962",
      },
      backgroundImage: {
        "bg-marbre":"url('./src/assets/images/bg-marbre.jpg')",
        "marbre-gris": "url('./src/assets/images/marbre-gris.jpg')",
      },
      fontFamily: {
        "logo-font": ["BonheurRoyal", "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui')],
}