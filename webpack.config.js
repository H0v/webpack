const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: path.join(__dirname, "src", "starter"),
    counter: path.join(__dirname, "src", "counter"),
  },
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "/dist/"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
  performance: {
    hints: false,
  },
};
