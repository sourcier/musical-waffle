export default (props, { rhythm, mediaQuery, styles, breakpoints }) => ({
  comments: {
    ...styles.container,
    maxWidth: breakpoints.lg,
    margin: '0 auto',
    padding: 0,
    [mediaQuery('md')]: {
      padding: 0
    }
  }
})
