/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    // fontSize: {
    //   xs: '0.875rem',
    //   sm: '1rem',
    //   md: '1.125rem',
    //   lg: '1.25rem',
    //   xl: '1.5rem',
    //   '2xl': '2rem',
    // },
    // colors: {
    //   'gray-900': '#121213',
    //   'gray-800': '#202024',
    //   'gray-400': '#7c7c8a',
    //   'gray-200': '#c4c4cc',
    //   'gray-100': '#e1e1e6',

    //   'cyan-500': '#81d8f7',
    //   'cyan-300': '#9be1fb',
    // },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
