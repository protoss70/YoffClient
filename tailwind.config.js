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
        // Custom colors
        success: {
          DEFAULT: "#28a745", // Green
          light: "#71db76", // Light green
          dark: "#218838", // Dark green
        },
        info: {
          DEFAULT: "#17a2b8", // Teal
          light: "#5bc0de", // Light teal
          dark: "#117a8b", // Dark teal
        },
        warning: {
          DEFAULT: "#ffc107", // Yellow
          light: "#ffeaa5", // Light yellow
          dark: "#c69500", // Dark yellow
        },
        danger: {
          DEFAULT: "#dc3545", // Red
          light: "#ff6b8a", // Light red
          dark: "#c82333", // Dark red
        },
        // You can define more custom colors here
      },
      screens: {
        "max-1300": { max: "1300px" },
        "max-1380": { max: "1380px" },
        "max-1200": { max: "1200px" },
        "max-1100": { max: "1100px" },
        "max-1000": { max: "1000px" },
        "max-900": { max: "900px" },
        "min-900": { min: "900px" },
        "max-800": { max: "800px" },
        "max-600": { max: "600px" },
      },
    },
  },
  plugins: [],
};
