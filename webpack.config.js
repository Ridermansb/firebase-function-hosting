const { join, resolve } = require("path");
const srcFolder = resolve(__dirname, "src");

module.exports = {
  entry: {
    dev: "./src/index.jsx"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [srcFolder],
        use: {
          loader: "babel-loader",
          query: {
            cacheDirectory: true // important for performance
          }
        }
      }
    ]
  }
};
