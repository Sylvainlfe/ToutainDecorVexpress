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
        "light-color": "#FFF6DB",
        "bg-dark-color": "#473335",
        "gold-400": "#EBB000",
        "gold-500": "#A67C00",
        "gold-600": "#856300",
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