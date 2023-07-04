const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './webpage/js/index.js', // Встановіть свій власний вхідний файл
  output: {
    path: path.resolve(__dirname, 'webpage'), // Встановіть папку виводу
    filename: 'script.js', // Встановіть назву виводного файлу
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
