const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0'
  },
  devtool: 'eval-source-map'
})
