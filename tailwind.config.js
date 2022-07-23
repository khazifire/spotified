module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black':'#191414', 
      'green': '#1DB954',
      'green2': '#20c95b',
      'white':'#FFFFFF', 
      'grey':'#757983',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      Montserrat :['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },

}