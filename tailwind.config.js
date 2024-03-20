/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: { sans: ['Gudea', 'sans-serif'] }
  },
  plugins: [require('flowbite/plugin')]
};
