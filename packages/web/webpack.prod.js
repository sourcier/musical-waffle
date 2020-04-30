const path = require("path")
const common = require("./webpack.common.js")
const merge = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "assets"),
        to: path.join(__dirname, "build", "assets"),
      },
    ]),
  ],
  optimization: {
    moduleIds: "hashed",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
})
