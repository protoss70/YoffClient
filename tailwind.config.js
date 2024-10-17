/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        main: "#B671FF",
        secondary: "#DB51C2",
        dark: "#222222",
        custom_blue: "#024AB0",
        custom_gray: "#6F6B6B",
        footer: "#353535",
      },
      screens: {
        "max-1300": { max: "1300px" },
        "max-1380": { max: "1380px" },
        "max-1100": { max: "1100px" },
        "max-900": { max: "900px" },
        "max-800": { max: "800px" },
        "max-600": { max: "600px" },
      },
    },
  },
  plugins: [],
};
