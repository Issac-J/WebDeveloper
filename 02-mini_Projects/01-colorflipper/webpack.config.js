const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },

  mode: "development",

  devtool: "source-map",

  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: "./index.html",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Color Flipper || Simple",
      template: "./index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
