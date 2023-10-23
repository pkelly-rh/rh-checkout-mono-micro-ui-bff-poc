const path = require("path");
const { merge } = require("webpack-merge");
const defaultConfig = require("./webpack.config.js");

module.exports = merge(defaultConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  output: {
    publicPath: "/",
  },
});
