/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'theme-navy-blue': '#343D68',
        'theme-blue-600': '#0571AD',
        'theme-red-600': '#E84949',
        'theme-gray-400': '#838383',
        'theme-gray-300': '#818080',
        'theme-grey-200': '#DFDEE0',
        'deep-violet-300': '#21092F',
        'theme-red-800': '#FF5050',
        'theme-purple-800': '#4F47C8',
        'theme-white-700': '#FFFDFD',
        'theme-blue-700': '#0ACBBF',
      },
      fontFamily: {
        BeVietnamPro: ['Be Vietnam Pro', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow':
          '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
        'input-shadow': ' 1px 3px 4px rgba(0, 0, 0, 0.17)',
      },
    },
  },
  plugins: [],
};
