const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
	output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.bundle.js',
   },
	devServer: {
      inline: true,
      contentBase: './build',
      port: 8081
   },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};