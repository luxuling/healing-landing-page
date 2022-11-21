/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E62E2D",
        primary: "#FFFFFF",
        background: "#AADCFD",
        heroText: "#6F6F6F",
        darkText:"#252525"
      }
    },
  },
  plugins: [],
}