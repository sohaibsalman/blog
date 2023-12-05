// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const tailwindColors = require('tailwindcss/colors')

const primaryColor = {
  'primary': {
    '50': '#c9f31d',
    '100': '#c9f31d',
    '200': '#c9f31d',
    '300': '#c9f31d',
    '400': '#c9f31d',
    '500': '#c9f31d',
    '600': '#c9f31d',
    '700': '#c9f31d',
    '800': '#c9f31d',
    '900': '#c9f31d',
    '950': '#c9f31d',
  },
  'default': {
    'primary': '#c9f31d',
    'gray-dark': '#131313',
    'grid-line': 'rgba(255,255,255,.05)',
    'divider': 'rgba(255,255,255,.15)',
  }
}
const colors = {...tailwindColors, ...primaryColor};

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.primary,
        gray: colors.gray,
        default: colors.default
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

export default colors;