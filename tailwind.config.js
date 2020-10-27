/* eslint-disable @typescript-eslint/no-var-requires */
const { colors } = require('tailwindcss/defaultTheme');

const theme = {
  colors: {
    ...colors,
    primary: {
      ...colors.indigo,
      default: colors.indigo[500],
    },
    success: {
      50: '#f4f7eb',
      100: '#e2ebcd',
      200: '#d0ddae',
      300: '#bdd090',
      400: '#b0c678',
      500: '#a3bd63',
      600: '#93ad5a',
      700: '#7f9950',
      800: '#6d8547',
      900: '#4e6338',
      default: '#7f9950',
    },
    secondary: {
      50: '#f3f1e0',
      100: '#e0dcb3',
      200: '#cbc67f',
      300: '#b6b14b',
      400: '#a7a422',
      500: '#999700',
      600: '#8d8800',
      700: '#7d7500',
      800: '#6b6000',
      900: '#4f3f00',
      default: '#e0dcb3',
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
      default: '#594a42',
    },
  },
  fontFamily: {
    sans: [
      'Creo',
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
    accent: ['Beloved Sans', 'sans-serif'],
    script: ['Beloved Script', 'cursive'],
  },
  extend: {
    spacing: {
      unset: 'unset',
      72: '18rem',
      84: '21rem',
      96: '24rem',
    },
  },
};

const variants = {
  borderWidth: ['responsive', 'first'],
  margin: ['responsive', 'last'],
};

const plugins = [];

const purge = ['./src/**/*.tsx'];

const future = {
  removeDeprecatedGapUtilities: true,
  purgeLayersByDefault: true,
};

module.exports = {
  purge,
  theme,
  variants,
  plugins,
  future,
};