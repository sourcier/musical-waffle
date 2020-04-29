const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const DotenvPlugin = require("dotenv-webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development"
  const isProduction = argv.mode === "production"

  return {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "build"),
      filename: "[name].[hash:8].js",
      publicPath: "/",
    },
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
    resolve: {
      mainFiles: ["index"],
    },
    module: {
      rules: [
        {
          test: /.(js)$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /.(jpg|jpeg|png|gif|mp3|svg|ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash:8].[ext]",
                outputPath: "assets",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new DotenvPlugin({
        path: process.env.ENV_FILE || ".env",
        systemvars: true,
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "src", "index.html"),
      }),
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
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    cache: isProduction ? false : true,
  }
}
