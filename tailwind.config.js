/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': '"Ubuntu"'
    },
    extend: {
      colors: {
        'primary': '#b868d3',
        'primary_dark': '#2d271b',
        'secondary': '#68b8d3'
      },
    },
  },
  plugins: [],
})

