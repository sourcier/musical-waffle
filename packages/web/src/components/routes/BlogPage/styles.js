export default (props, { rhythm, mediaQuery, styles, breakpoints }) => ({
  blogPost: {
    ...styles.container,
    maxWidth: breakpoints.lg,
    margin: `0 auto ${rhythm(3)}`,
  },
})
