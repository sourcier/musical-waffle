export default (props, { rhythm, mediaQuery, styles, breakpoints }) => ({
  comments: {
    ...styles.container,
    maxWidth: breakpoints.lg,
    margin: '0 auto'
  }
})
