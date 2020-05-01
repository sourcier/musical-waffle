export default ({ error }, { rhythm, colors, mediaQuery, styles, rgba }) => ({
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
    borderRadius: rhythm(0.1),
    '&[disabled]': {
      background: rgba(colors.muted, 0.5),
    },
  },
})
