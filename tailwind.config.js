/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'fruit-default':'#F85559',
        'dark-2': '#121212',
        'dark-3':'#121212cc',
      },
      fontFamily:{
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}