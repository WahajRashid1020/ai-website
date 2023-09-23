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
        primary: "#0B1028",
        secondary: "#2644D9",
        dim: "#97A1BA",
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
