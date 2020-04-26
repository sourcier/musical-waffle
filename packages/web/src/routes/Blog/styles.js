export default (props, { rhythm, colors }) => ({
  blogList: {
    padding: rhythm(0.5),
  },
  blogListItem: {
    marginTop: rhythm(3),
    '&:nth-child(1)': {
      marginTop: rhythm(0),
    },
  },
})
