export default ({ isOpen }, { rhythm, colors, mediaQuery, styles }) => ({
  contact: {
    ...styles.container,
    marginBottom: rhythm(3),
    fontSize: rhythm(0.5),
  },
  form: {
    fieldset: {
      padding: 0,
      border: 0,
    },
    textarea: {
      minHeight: rhythm(4),
      width: '100%',
      marginTop: rhythm(0.25),
    },
    input: {
      width: '100%',
      marginTop: rhythm(0.25),
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
  },
  label: {
    color: colors.primary,
    fontWeight: 400,
    textTransform: 'uppercase',
    marginBottom: 0,
    fontSize: rhythm(0.5),
  },
  help: {
    color: colors.muted,
    fontSize: rhythm(0.5),
    margin: 0,
  },
})