/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      "sans": ["Andika", "sans-serif"],
      "serif": ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [],
}