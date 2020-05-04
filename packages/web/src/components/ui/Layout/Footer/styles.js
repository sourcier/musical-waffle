export default (props, { rhythm, colors, styles }) => ({
  footer: {
    borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
    textAlign: 'center',
  },
  links: {
    ...styles.container,
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
    'p, a': {
      fontSize: rhythm(0.5),
      color: colors.muted,
    },
  },
})
