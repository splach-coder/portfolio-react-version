/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["VT323", "monospace"],
      },
      colors: {
        black: "#212121",
        white: "#ffffff",
        purple: "#9a99ff",
        ActiveBlue: "#2fcbef",
        yellow: "#e6db74",
        grey: "#3C3C3C",
      },
      fontSize: {
        bigTitle: "123px",
        smallTitle: "40px",
        desc: "20px",
        navigation: "22px",
      },
    },
  },
  plugins: [],
};
