/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#181919",
        steel: "#389bc4",
        navy: "#0b4d70",
        aqua: "#47b8b2",
      },
    },
  },
  plugins: [],
};
