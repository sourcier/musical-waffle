export default (props, { rhythm, colors }) => ({
  blogList: {
    padding: rhythm(0.5),
  },
  blogListItem: {
    marginTop: rhythm(3),
    '&:nth-of-type(1)': {
      marginTop: rhythm(0),
    },
  },
})
