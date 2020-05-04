export default ({ isOpen }, { rhythm, colors, mediaQuery, styles }) => ({
  header: {
    borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
    borderBottom: `solid 1px ${colors.light}`,
    padding: rhythm([0.25, 0.5]),
  },
  buttons: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    a: {
      marginBottom: 0,
    },
    button: {
      border: 0,
      padding: 0,
      color: isOpen ? colors.white : colors.text,
    },
    img: {
      width: rhythm(4),
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
