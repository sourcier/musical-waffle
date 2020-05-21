import React from 'react'
import { css } from '@emotion/core'
import * as theme from '../libs/theme'

const stylesToClasses = (styles = {}) =>
  Object.keys(styles).reduce(
    (classNames, styleKey) => ({
      ...classNames,
      [styleKey]: css({ ...styles[styleKey], label: styleKey })
    }),
    {}
  )

export const withStyles = (styles) => (Component) => (props) => {
  const combinedProps = {
    ...props,
    styles:
      typeof styles === 'function'
        ? stylesToClasses(styles(props, theme))
        : stylesToClasses(styles)
  }

  return <Component {...combinedProps} />
}
