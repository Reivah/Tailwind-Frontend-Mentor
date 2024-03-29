/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'Sans-serif']
      },
     colors: {
      'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
      'Charcoal-Grey': 'hsl(235, 18%, 26%)',
      'Grey': 'hsl(231, 7%, 60%)',
      'Tomato': 'hsl(4, 100%, 67%)'
     }
    },
  },
  plugins: [],
}

