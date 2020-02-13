const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  },
  webpack(config, options) {
    return config
  }
})
