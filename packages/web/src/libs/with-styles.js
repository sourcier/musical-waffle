import React from 'react'
import { css } from '@emotion/core'
import * as theme from './theme'

const stylesToClasses = (styles = {}) =>
  Object.keys(styles).reduce(
    (classNames, styleKey) => ({
      ...classNames,
      [styleKey]: css({ ...styles[styleKey], label: styleKey }),
    }),
    {}
  )

export default (styles) => (Component) => (props) => {
  const combinedProps = {
    ...props,
    styles:
      typeof styles === 'function'
        ? stylesToClasses(styles(props, theme))
        : stylesToClasses(styles),
  }

  return <Component {...combinedProps} />
}
