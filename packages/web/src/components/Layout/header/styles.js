export default (props, { rhythm, colors }) => ({
  header: {
    borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
  },
  toggle: {
    textAlign: 'right',
    padding: rhythm(0.5),
    button: {
      border: 0,
    },
  },
})
