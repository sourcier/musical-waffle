export default ({ isOpen }, { rhythm, colors, mediaQuery, styles }) => ({
  header: {
    borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
  },
  toggle: {
    textAlign: 'right',
    padding: rhythm([0.5, 0.5, 0]),
    background: isOpen ? colors.light : colors.transparent,
    [mediaQuery('md')]: {
      padding: rhythm([1, 1, 0]),
      fontSize: rhythm(1),
    },
    button: {
      border: 0,
      padding: 0,
      color: isOpen ? colors.primary : colors.text,
    },
  },
  menu: {
    ...styles.container,
    background: colors.light,
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
