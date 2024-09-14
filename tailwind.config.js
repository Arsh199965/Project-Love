/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        peach: '#FEC0C0',
     },
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],  // Adding the Caveat font
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}