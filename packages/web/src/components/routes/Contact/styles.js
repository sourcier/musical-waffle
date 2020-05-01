export default ({ error }, { rhythm, colors, mediaQuery, styles }) => ({
  contact: {
    ...styles.container,
    marginBottom: rhythm(3),
    fontSize: rhythm(0.5),
  },
  button: {
    border: 0,
    background: colors.secondary,
    color: 'white',
    margin: rhythm([0.5, 0, 0.5]),
    fontWeight: 400,
    padding: rhythm([0.3, 0.75]),
    '&[disabled]': {
      background: colors.muted,
    },
  },
})
