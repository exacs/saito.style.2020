const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Merriweather',
          ...defaultTheme.fontFamily.serif
        ],
        sans: [
          'Poppins',
          ...defaultTheme.fontFamily.sans
        ]
      },
    },
  },
  variants: {},
  plugins: [],
}
