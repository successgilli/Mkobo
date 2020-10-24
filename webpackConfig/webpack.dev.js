const path = require("path");
const merge = require("webpack-merge");
const dotenv = require("dotenv");
const Webpack = require("webpack");
const common = require("./webpack.common.js");

dotenv.config();

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    publicPath: "/",
    compress: true,
    overlay: true,
    liveReload: false,
    hot: true,
    port: 8080,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.EnvironmentPlugin(["NODE_ENV"]),
  ],
});
