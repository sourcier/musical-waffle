export default (props, { rhythm, colors }) => ({
  footer: {
    borderTop: `solid ${rhythm(0.25)} ${colors.primary}`,
    textAlign: 'center',
  },
  links: {
    padding: rhythm(0.5),
    ul: {
      listStyle: 'none',
      paddingLeft: 0,
      li: {
        display: 'inline-block',
        paddingRight: rhythm(1),
        '&:last-child': {
          paddingRight: 0,
        },
        a: {
          color: colors.text,
          textDecoration: 'none',
        },
      },
    },
  },
  copyright: {
    padding: rhythm(0.5),
    backgroundColor: '#fafafa',
    'p, a': {
      fontSize: rhythm(0.5),
      color: colors.muted,
    },
  },
})
