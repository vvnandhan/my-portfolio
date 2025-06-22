/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // Your main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // All JS/JSX/TS/TSX files in /src
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Montserrat", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
