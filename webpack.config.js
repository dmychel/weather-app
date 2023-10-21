const HtmlWebpackPlugin = require("html-webpack-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/scripts/index.js",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MomentLocalesPlugin(),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
