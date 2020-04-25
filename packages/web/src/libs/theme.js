import Shevy from 'shevyjs'

const shevy = new Shevy()

// Breakpoints are based on a base font size of 16px
const breakpoints = {
  sm: '23rem', // 375px
  md: '48rem', // 768px
  lg: '60rem', // 960px
  xl: '80rem', // 1024px
}

export const rhythm = shevy.baseSpacing

export const colors = {
  primary: '#fd256e',
}

export const fonts = {
  sourceSansPro: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
  },
  playfairDisplay: {
    fontFamily: "'Playfair Display', sans-serif",
    fontWeight: 400,
  },
}

export const treatments = {
  body: {
    body: {
      ...shevy.body,
      ...fonts.sourceSansPro,
    },
    h1: {
      ...shevy.h1,
      ...fonts.playfairDisplay,
    },
    h2: {
      ...shevy.h2,
      ...fonts.playfairDisplay,
    },
    h3: {
      ...shevy.h3,
      ...fonts.playfairDisplay,
    },
    h4: {
      ...shevy.h4,
      ...fonts.playfairDisplay,
    },
    h5: {
      ...shevy.h5,
      ...fonts.playfairDisplay,
    },
    h6: {
      ...shevy.h6,
      ...fonts.playfairDisplay,
    },
    p: {
      ...shevy.content,
    },
    ol: {
      ...shevy.content,
    },
    ul: {
      ...shevy.content,
    },
    pre: {
      ...shevy.content,
    },
  },
}

export const mediaQuery = (size = 'sm', query = 'min-width') =>
  `@media (${query}: ${breakpoints[size]})`

export const theme = {
  rhythm,
  colors,
  fonts,
  treatments,
  mediaQuery,
}
