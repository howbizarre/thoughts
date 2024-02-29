/** @type {import('tailwindcss').Config} */

export const darkMode = "class";
export const content = [
  "./components/**/*.{vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./app.vue",
];
export const theme = {
  fontFamily: {
    "sans": ["Inter", "sans-serif"],
    "serif": ["Playfair Display", "serif"],
  },
  extend: {},
};
export const plugins = [require("@tailwindcss/typography")];