/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Degular: ["Degular"],
        DegularSemiBold: ["DegularSemiBold"],
        DegularBold: ["DegularBold"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
