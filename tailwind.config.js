/** @type {import('tailwindcss').Config} */
const typography = require("@tailwindcss/typography");
const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ลบ "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      colors: {
        softpink: {
          50:  "#FBF5F8",
          100: "#F6ECF2",
          200: "#EEDDE6",
          300: "#F7B5CC",
          400: "#E76AA6",
          500: "#D94B8E",
          600: "#C23E7D",
        },
      },
      borderRadius: { xl: "1.2rem", "2xl": "1.6rem" },
      boxShadow: { soft: "0 6px 18px rgba(231,106,166,0.15)" },
    },
  },
  plugins: [typography, lineClamp], // ไม่มี preline
};
