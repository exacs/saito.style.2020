const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      white: defaultTheme.colors.white,
      black: defaultTheme.colors.black,
      transparent: defaultTheme.colors.transparent,
      indigo: defaultTheme.colors.indigo,
    },
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
