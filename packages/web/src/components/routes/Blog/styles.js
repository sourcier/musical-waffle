export default (props, { rhythm, mediaQuery, styles, colors }) => ({
  blogList: {
    ...styles.container,
  },
  blogListItem: {
    marginBottom: rhythm(3),
  },
  empty: {
    ...styles.container,
    textAlign: 'center',
    background: colors.shade,
  },
})
