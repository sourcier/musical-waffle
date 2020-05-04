export default (
  props,
  { rhythm, mediaQuery, styles, colors, breakpoints }
) => ({
  blogList: {
    ...styles.container,
    maxWidth: breakpoints.lg,
    margin: `0 auto ${rhythm(3)}`,
  },
  blogListItem: {
    marginBottom: rhythm(3),
  },
  empty: {
    ...styles.container,
    textAlign: 'center',
    background: colors.light,
  },
})
