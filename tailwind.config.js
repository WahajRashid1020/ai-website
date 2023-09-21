/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basic: "#FECD05",
        secondary: "#2644D9",
        primary: "#0B1028",
      },
      fontWeight: {
        900: 900,
        700: 700,
        500: 500,
      },
    },
  },
  plugins: [],
};
