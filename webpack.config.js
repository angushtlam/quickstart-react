module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}