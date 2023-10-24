const { merge } = require("webpack-merge");
const defaultConfig = require("./webpack.config.js");

module.exports = merge(defaultConfig, {
  mode: "production",
  output: {
    publicPath: "/rh-checkout-v3/",
  },
  optimization: {
    minimize: false,
  },
});
