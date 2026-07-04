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
      
      // 2. Custom Animations (Slow & Smooth)
      animation: {
        marquee: 'marquee 150s linear infinite',
        'marquee-reverse': 'marquee-reverse 150s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};   