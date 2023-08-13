/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bali':"url('../img/bali.jpg')",
        'chicago':"url('../img/chicago.jpg')",
        'europa':"url('../img/europe.jpg')",
        'iceland':"url('../img/iceland.jpg')",
        'la':"url('../img/LA.jpg')",
        'miami':"url('../img/miami.jpg')",
        'NY':"url('../img/new_york.jpg')",
        'chicago':"url('../img/chicago.jpg')",
        'norway':"url('../img/norway.jpg')",
        'SF':"url('../img/sanFrancisco.jpg')",
        'SFD':"url('../img/sanFranciscoDesktop.jpg')",
        'seattle':"url('../img/seattle.jpg')",
        'suiza':"url('../img/switzerland.jpg')",
        'sydney':"url('../img/sydney.jpg')",
        'yosemite':"url('../img/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'prymary':'#CC2D4A',
        'secondary':'#8FA206',
        'tertiary':'#61aec9'
      }),
      textColor:{
        'prymary':'#CC2D4A',
        'secondary':'#8FA206',
        'tertiary':'#61aec9'
      },
      fontFamily:{
        montserrat:["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

