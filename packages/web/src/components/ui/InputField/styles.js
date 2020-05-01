export default (
  { field: { error, value } },
  { rhythm, colors, mediaQuery, styles, rgba }
) => ({
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
  error: {
    color: colors.danger,
    fontSize: rhythm(0.5),
    margin: rhythm([0.25, 0, 0.25]),
  },
  textarea: {
    minHeight: rhythm(4),
    width: '100%',
    marginTop: rhythm(0.25),
    borderColor: error ? colors.danger : colors.muted,
    backgroundColor: error ? rgba(colors.danger, 0.25) : colors.transparent,
  },
  input: {
    width: '100%',
    marginTop: rhythm(0.25),
    borderColor: error ? colors.danger : colors.muted,
    backgroundColor: error ? rgba(colors.danger, 0.25) : colors.transparent,
  },
  fieldset: {
    padding: 0,
    border: 0,
  },
})
