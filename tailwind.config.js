/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
     colors: {
      'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
      'Charcoal-Grey': 'hsl(235, 18%, 26%)',
      'Grey': 'hsl(231, 7%, 60%)'
     }
    },
  },
  plugins: [],
}

