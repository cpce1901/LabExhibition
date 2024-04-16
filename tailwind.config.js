/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "main": "url('./assets/main.jpeg')",

      }
    },
    fontFamily: {
      "exo": ['"exo 2"'],
      "rale": ['"Raleway"'],
      "robo": ['"Roboto"'],
    },
  },
  plugins: [],
}

