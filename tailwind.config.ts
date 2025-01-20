import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      "sans": ["Inter", "sans-serif"],
      "serif": ["Playfair Display", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};