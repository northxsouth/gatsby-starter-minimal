/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

const theme = {
  colors: {
    ...colors,
    primary: {
      ...colors.teal,
      DEFAULT: colors.teal[500],
    },
    secondary: {
      50: '#f8f9fe',
      100: '#e9e7fe',
      200: '#d3cdf6',
      300: '#bbaaec',
      400: '#a584e2',
      500: '#8762c9',
      600: '#694bb2',
      700: '#4c3990',
      800: '#31286b',
      900: '#181651',
      DEFAULT: '#8762c9',
    },
    success: {
      ...colors.green,
      DEFAULT: colors.green[500],
    },
    muted: {
      50: '#ededed',
      100: '#d1d1d1',
      200: '#b3b1b0',
      300: '#9a918c',
      400: '#87786f',
      500: '#756054',
      600: '#69574c',
      700: '#594a42',
      800: '#4a3e38',
      900: '#3a302d',
      DEFAULT: '#594a42',
    },
  },
  fontFamily: {
    sans: [
      'Work Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Open Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
  },
  extend: {
    spacing: {
      unset: 'unset',
      72: '18rem',
      84: '21rem',
      96: '24rem',
    },
    borderColor: {
      DEFAULT: '#eeeef0',
    },
  },
  container: {
    padding: {
      DEFAULT: '1rem',
      md: '2rem',
    },
  },
};

const variants = {
  borderWidth: ['responsive', 'first'],
  margin: ['responsive', 'last'],
};

const plugins = [];

const purge = ['./src/**/*.tsx'];

module.exports = {
  purge,
  theme,
  variants,
  plugins,
};
