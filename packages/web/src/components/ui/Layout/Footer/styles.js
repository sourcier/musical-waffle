export default (props, { rhythm, colors, styles, mediaQuery, breakpoints }) => {
  return {
    root: {
      borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
    },
    footer: {
      ...styles.container,
      maxWidth: breakpoints.lg,
      margin: `0 auto`,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      [mediaQuery('md')]: {
        flexDirection: 'row',
        textAlign: 'left',
        padding: rhythm(1),
      },
    },
    links: {
      ul: {
        listStyle: 'none',
        padding: 0,
        li: {
          marginBottom: rhythm(0.5),
          a: {
            color: colors.text,
            textDecoration: 'none',
            textTransform: 'uppercase',
          },
        },
      },
    },
    legals: {
      ul: {
        listStyle: 'none',
        padding: 0,
        li: {
          marginBottom: rhythm(0.5),
          a: {
            color: colors.text,
            textDecoration: 'none',
            textTransform: 'uppercase',
          },
        },
      },
    },
    socials: {
      ul: {
        listStyle: 'none',
        paddingLeft: 0,
        li: {
          display: 'inline-block',
          paddingRight: rhythm(0.75),
          '&:last-child': {
            paddingRight: 0,
          },
          a: {
            color: colors.text,
            textDecoration: 'none',
            textTransform: 'uppercase',
          },
        },
      },
    },
    copyright: {
      ...styles.container,
      backgroundColor: colors.light,
      textAlign: 'center',
      'p, a': {
        fontSize: rhythm(0.5),
        color: colors.muted,
      },
    },
  }
}
