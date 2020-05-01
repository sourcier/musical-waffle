export default (props, { rhythm, mediaQuery }) => ({
  blogPost: {
    padding: rhythm(0.5),
    marginBottom: rhythm(1),
    [mediaQuery('md')]: {
      padding: rhythm(1),
    },
  },
})
