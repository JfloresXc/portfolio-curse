const colors = require("tailwindcss/colors");
const fontSize = require("tailwindcss/defaultTheme").fontSize;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0866FF",
      ...colors,
    },
    fontSize: {
      ...fontSize,
      regular: "15px",
    },
  },
  plugins: [],
};
