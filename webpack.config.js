const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require('webpack')
const DotenvPlugin = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    mainFiles: ['index']
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.REACT_APP_PARSE_URL': `'${process.env.REACT_APP_PARSE_URL || ''}'`,
      'process.env.REACT_APP_PARSE_ID': `'${process.env.REACT_APP_PARSE_ID || ''}'`,
      'process.env.REACT_APP_PARSE_KEY': `'${process.env.REACT_APP_PARSE_KEY || ''}'`
    }),
    new DotenvPlugin({
      path: `./${process.env.ENV_FILE || '.env'}`
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "assets"), to: path.join(__dirname, "build") }
    ])
  ],
  devServer: {
    historyApiFallback: true,
  }
};
