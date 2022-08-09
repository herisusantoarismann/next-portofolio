/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#151515",
        primary: "#ffac41",
        secondary: "#f2f1ed",
      },
      keyframes: {
        "bounce-left": {
          "0%, 100%": { transform: "translateX(0rem)" },
          "50%": { transform: "translateX(-0.5rem)" },
        },
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0rem)" },
          "50%": { transform: "translateX(0.5rem)" },
        },
      },
      animation: {
        "bounce-left": "bounce-left 1s ease-in-out infinite",
        "bounce-right": "bounce-right 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
