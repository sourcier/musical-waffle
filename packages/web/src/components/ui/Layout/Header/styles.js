export default ({ isOpen }, { rhythm, colors, mediaQuery, styles }) => ({
  header: {
    borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
  },
  toggle: {
    textAlign: 'right',
    padding: rhythm([0.75, 0.75, 0]),
    color: isOpen ? colors.white : colors.text,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    fontSize: rhythm(0.75),
    [mediaQuery('md')]: {
      padding: rhythm([1, 1, 0]),
      fontSize: rhythm(1),
    },
    button: {
      border: 0,
      padding: 0,
    },
  },
  menu: {
    ...styles.container,
    background: colors.primary,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      li: {
        marginBottom: rhythm(0.5),
        a: {
          marginLeft: rhythm(0.25),
          color: colors.white,
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontWeight: 400,
        },
      },
    },
  },
})
