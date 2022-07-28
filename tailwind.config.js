module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black':'#181818',
      'black2': '#040306',
      'green': '#1DB954',
      'green2': '#20c95b',
      'white':'#FFFFFF', 
      'gray':'#757983',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      Montserrat :['Montserrat', 'sans-serif'],
      Monoton :['Monoton', 'cursive'],

    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },

}