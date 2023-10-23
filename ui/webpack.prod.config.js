const { merge } = require("webpack-merge");
const defaultConfig = require("./webpack.config.js");

module.exports = merge(defaultConfig, {
  mode: "production",
  output: {
    publicPath: "/rh-react-micro-template-v1/",
  },
  optimization: {
    minimize: false,
  },
});
