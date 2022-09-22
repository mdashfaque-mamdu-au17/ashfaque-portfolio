/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'theme-navy-blue': '#343D68',
        'theme-red-600': '#E84949',
        'theme-gray-400': '#838383',
        'theme-gray-300': '#818080',
      },
      fontFamily: {
        BeVietnamPro: ['Be Vietnam Pro', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow':
          '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
