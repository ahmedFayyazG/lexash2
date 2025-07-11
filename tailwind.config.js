// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#E3B77A",
      },
      fontFamily: {
        // chakra: ['Roundo', 'sans-serif'],
      roundo: ['"Roundo"', 'sans-serif'],

      },
    },
  },
  plugins: [],
};