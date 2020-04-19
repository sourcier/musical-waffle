const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvPlugin = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].[contenthash:8].js",
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        amplify: {
          test: /[\\/]node_modules[\\/](@aws-amplify)[\\/]/,
          name: "amplify"
        },
        awsSdk: {
          test: /[\\/]node_modules[\\/](aws-sdk)[\\/]/,
          name: "aws-sdk"
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!aws-amplify)(!aws-sdk)[\\/]/,
          name: "vendor"
        }
      }
    }
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
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DotenvPlugin({
      path: process.env.ENV_FILE || '.env'
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "assets"), to: path.join(__dirname, "build", "assets") }
    ])
  ],
  devServer: {
    historyApiFallback: true,
  }
};
