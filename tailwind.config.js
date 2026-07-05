/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // 1. Custom Fonts
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Roboto', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};   