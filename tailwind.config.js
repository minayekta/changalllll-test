/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode:'class',
  theme: {
    extend: {
      // fontFamily: {
      //   body: ["IranSans"],
      // },
      colors: {
        Blue: {
          dark: "#020B1F",
          gray:"#182040",
          light:'#0551E7'
        },
        Red:{
          light:"#FF3231"
        }
      },
    }
  },
  plugins: [],
}

