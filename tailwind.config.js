/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Elevate Services logo
        primary: {
          DEFAULT: '#91AA5F', // RGB(145, 170, 95) - Main green from logo
          dark: '#7A934F',
          light: '#A4C06F',
        },
        accent: {
          DEFAULT: '#E0E0E0', // Off-white from logo text
          dark: '#C0C0C0',
          light: '#F0F0F0',
        },
        // Neutral colors
        secondary: {
          DEFAULT: '#6EC1E4',
          dark: '#5BA8C5',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
