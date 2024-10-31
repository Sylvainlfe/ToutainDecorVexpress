/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color":"#A67C00",
        "light-color": "#FAFAFA",
        "bg-dark-color": "#473335",
        "gold-color": "#A67C00",
        "sapin": "#042F27"
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