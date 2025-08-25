/** @type {import('tailwindcss').Config} */
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
        // Make 'font-sans' = Poppins everywhere
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        // Optional: keep a named utility if you want to target Poppins explicitly
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
