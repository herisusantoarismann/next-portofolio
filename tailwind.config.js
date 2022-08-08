/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#151515",
        primary: "#ffac41",
        secondary: "#f2f1ed",
      },
    },
  },
  plugins: [],
};
