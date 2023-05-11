/** @type {import("tailwindcss").Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#9D9D9D",
          100: "#93AEBF",
          200: "#5386A6",
          300: "#345B73",
          400: "#D5E5F2",
          500: "#012340",
          600: "#343541",
          700: "#40414F",
        },
        primary: {
          DEFAULT: "#6558F5",
          100: "#E0DEFD",
          600: "#5146C4",
          700: "#3D3593",
        },
        black: {
          DEFAULT:"#212121",
        },
        "dark-grey": "#666666",
        "off-white": "#E0E0E0",
        white: "#FFFFFF",
        "border-gray": "#D2CACA"
      },
    },
  },
  plugins:[]
};
