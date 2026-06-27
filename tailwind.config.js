/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EA",
        "cream-dark": "#EFE9D8",
        forest: "#3F5D44",
        "forest-dark": "#2E4634",
        gold: "#C9A24B",
        "gold-light": "#DCC07F",
        ink: "#2B2B28",
        muted: "#6B6B63",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};