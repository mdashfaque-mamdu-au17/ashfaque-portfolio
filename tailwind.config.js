/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'theme-navy-blue': '#343D68',
        'theme-red-600': '#E84949',
      },
      fontFamily: {
        BeVietnamPro: ['Be Vietnam Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
