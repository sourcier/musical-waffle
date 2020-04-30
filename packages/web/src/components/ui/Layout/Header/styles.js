export default ({ isOpen }, { rhythm, colors }) => ({
  header: {
    borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
  },
  toggle: {
    textAlign: 'right',
    padding: rhythm(0.5),
    paddingBottom: 0,
    background: isOpen ? colors.shade : colors.transparant,
    button: {
      border: 0,
      color: isOpen ? colors.primary : colors.text,
      cursor: 'pointer',
    },
  },
  menu: {
    background: colors.shade,
    padding: rhythm(0.5),
    textAlign: 'center',
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      li: {
        marginBottom: rhythm(0.5),
        a: {
          marginLeft: rhythm(0.25),
        },
      },
    },
  },
})
