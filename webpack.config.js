/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  CopyPlugin = require("copy-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  OverwolfPlugin = require("./overwolf.webpack");

module.exports = (env) => ({
  entry: {
    background: "./src/overwolf/background/index.ts",
    in_game: "./src/overwolf/in_game/index.tsx",
    desktop: "./src/overwolf/desktop/index.tsx",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx??$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          { loader: "postcss-loader" },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "js/[name].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "public", to: "./" }],
    }),
    new HtmlWebpackPlugin({
      template: "./src/overwolf/background/index.html",
      filename: path.resolve(__dirname, "./dist/background/index.html"),
      chunks: ["background"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/overwolf/desktop/index.html",
      filename: path.resolve(__dirname, "./dist/desktop/index.html"),
      chunks: ["desktop"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/overwolf/in_game/index.html",
      filename: path.resolve(__dirname, "./dist/in_game/index.html"),
      chunks: ["in_game"],
    }),
    new OverwolfPlugin(env),
  ],
});
