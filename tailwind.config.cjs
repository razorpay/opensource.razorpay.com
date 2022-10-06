const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      space: {
        42: '10.94rem',
      },
      boxShadow: {
        'inner-xs': 'inset 0 1px 1px rgba(0,0,0,.075)',
      },
      scale: {
        1015: '1.015',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
