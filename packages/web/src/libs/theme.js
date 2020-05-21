import Shevy from 'shevyjs'
import { rgba } from 'polished'

const baseFontSize = 24

const shevy = new Shevy({
  baseFontSize: `${baseFontSize}px`,
  baseFontScale: 'majorSecond'
})

export { rgba }

export const breakpoints = {
  sm: `${375 / baseFontSize}em`,
  md: `${768 / baseFontSize}em`,
  lg: `${960 / baseFontSize}em`,
  xl: `${1024 / baseFontSize}em`
}

export const mediaQuery = (size = 'sm', query = 'min-width') =>
  `@media (${query}: ${breakpoints[size]})`

export const rhythm = (factorOrFactors) =>
  Array.isArray(factorOrFactors)
    ? factorOrFactors.map((factor) => shevy.baseSpacing(factor)).join(' ')
    : shevy.baseSpacing(factorOrFactors)

export const colors = {
  primary: '#007bff',
  secondary: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  success: '#28a745',
  muted: '#6c757d',
  text: '#212529',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#fff',
  transparent: 'transparent'
}

export const fonts = {
  sourceSansPro: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 300
  },
  playfairDisplay: {
    fontFamily: "'Playfair Display', sans-serif",
    fontWeight: 400
  }
}

export const treatments = {
  body: {
    body: {
      ...shevy.body,
      ...fonts.sourceSansPro,
      color: colors.text
    },
    h1: {
      ...shevy.h1,
      ...fonts.playfairDisplay
    },
    h2: {
      ...shevy.h2,
      ...fonts.playfairDisplay,
      a: {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        marginBottom: 'inherit',
        textDecoration: 'none',
        color: colors.text
      }
    },
    h3: {
      ...shevy.h3,
      ...fonts.playfairDisplay
    },
    h4: {
      ...shevy.h4,
      ...fonts.playfairDisplay
    },
    h5: {
      ...shevy.h5,
      ...fonts.playfairDisplay
    },
    h6: {
      ...shevy.h6,
      ...fonts.playfairDisplay
    },
    'p, a, ol, ul, pre': {
      ...shevy.content
    },
    stong: {
      fontWeight: '400'
    },
    button: {
      cursor: 'pointer'
    },
    a: {
      color: colors.primary
    },
    img: {
      maxWidth: '100%'
    }
  }
}

export const styles = {
  container: {
    padding: rhythm(0.5),
    [mediaQuery('md')]: {
      padding: rhythm(1)
    }
  }
}
