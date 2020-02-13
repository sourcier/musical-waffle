const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  distDir: 'build',
  webpack(config, options) {
    return config
  }
})
