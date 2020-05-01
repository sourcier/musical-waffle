export default (props, { rhythm, mediaQuery }) => ({
  blogList: {
    padding: rhythm(0.5),
    [mediaQuery('md')]: {
      padding: rhythm(1),
    },
  },
  blogListItem: {
    marginBottom: rhythm(3),
  },
})
