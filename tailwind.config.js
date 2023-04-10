/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 15px 4px #d1d4de",
      },
      width: {
        128: "47%",
      },
      height: {
        128: "38rem",
      },
      screens: {
        lg: "1200px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
