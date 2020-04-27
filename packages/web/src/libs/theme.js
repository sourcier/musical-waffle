import Shevy from 'shevyjs'

const baseFontSize = 24

const shevy = new Shevy({
  baseFontSize: `${baseFontSize}px`,
  baseFontScale: 'minorThird',
})

const breakpoints = {
  sm: `${375 / baseFontSize}rem`,
  md: `${768 / baseFontSize}rem`,
  lg: `${960 / baseFontSize}rem`,
  xl: `${1024 / baseFontSize}rem`,
}

export const rhythm = shevy.baseSpacing

export const colors = {
  primary: '#fd256e',
  text: '#343434',
  muted: '#777',
}

export const fonts = {
  sourceSansPro: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 300,
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
      color: colors.text,
    },
    h1: {
      ...shevy.h1,
      ...fonts.playfairDisplay,
    },
    h2: {
      ...shevy.h2,
      ...fonts.playfairDisplay,
      a: {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        marginBottom: 'inherit',
        textDecoration: 'none',
        color: colors.text,
      },
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
    'p, a, ol, ul, pre': {
      ...shevy.content,
    },
    stong: {
      fontWeight: '400',
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
