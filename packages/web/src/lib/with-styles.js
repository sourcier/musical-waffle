import React from 'react'

export default (styles) => (Component) => (props) => {
  const combinedProps = {
    ...props,
    styles: typeof styles === 'function' ? styles(props) : styles,
  }

  return <Component {...combinedProps} />
}
