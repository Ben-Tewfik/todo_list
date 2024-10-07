/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#1e6f9f",
        blue: "#4ea8de",
        darkPurple: "#5e60ce",
        purple: "8284fa",
        gray700: "#0d0d0d",
        gray600: "#1a1a1a",
        gray500: "#262626",
        gray400: "#333333",
        gray300: "#808080",
        gray200: "#d9d9d9",
        gray100: "#f2f2f2",
        danger: "#e25858",
      },
    },
  },
  plugins: [],
};
