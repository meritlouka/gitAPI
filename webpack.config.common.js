const webpack = require('webpack');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
         loader: 'raw-loader!postcss-loader!sass-loader'
      }
    ]
  }
};