/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#B671FF",
        secondary: "#DB51C2",
        dark: "#222222",
        custom_blue: "#024AB0",
        custom_gray: "#6F6B6B",
        footer: "#353535",
      },
    },
  },
  plugins: [],
};
