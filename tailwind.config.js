/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation:{
        fadeIn : 'fadeIn 1s ease-in 1'
      },
      fontFamily : {
        handWriting : ['Caveat', 'cursive']
      },
      keyframes : theme => ({
        fadeIn : {
          '0%': {opacity: theme('opacity.0')},
          '100%': {opacity: theme('opacity.100')}
        }
      }),
    },
  },
  plugins: [],
}

