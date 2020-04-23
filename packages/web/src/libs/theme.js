import Shevy from 'shevyjs'

const shevy = new Shevy()

const rhythm = shevy.baseSpacing

const colors = {}

const fonts = {}

// Breakpoints are based on a base font size of 16px
const breakpoints = {
  sm: '23rem', // 375px
  md: '48rem', // 768px
  lg: '60rem', // 960px
  xl: '80rem', // 1024px
}

const treatments = {
  body: {
    body: {
      ...shevy.body,
    },
    h1: {
      ...shevy.h1,
    },
    h2: {
      ...shevy.h2,
    },
    h3: {
      ...shevy.h3,
    },
    h4: {
      ...shevy.h4,
    },
    h5: {
      ...shevy.h5,
    },
    h6: {
      ...shevy.h6,
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

const mediaQuery = (size = 'sm', query = 'min-width') =>
  `@media (${query}: ${breakpoints[size]})`

export default {
  colors,
  fonts,
  mediaQuery,
  treatments,
  rhythm,
}
