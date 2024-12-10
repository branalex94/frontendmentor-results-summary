/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      'light-red-bg': '#ff575717',
      'light-yellow-bg': '#ffb11f17',
      'light-green-bg': '#00bd9117',
      'light-blue-bg': '#1125d417'
    },
    extend: {
      boxShadow: {
        'cardShadow': '0px 0px 15px hsl(241, 100%, 89%)'
      }
    },
  },
  plugins: [],
}

