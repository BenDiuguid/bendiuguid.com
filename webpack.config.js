const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
        },
        resource: {
          test: /\.js$/,
          exclude: /node_modules\/(?!(autotrack|dom-utils))/,
        },
      },
    ],
  },
};
