const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './webpage/js/index.js', // Встановіть свій власний вхідний файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Встановіть папку виводу
    filename: 'script.js', // Встановіть назву виводного файлу
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Використовуємо Babel для транспіляції коду ES6
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpage/index.html', // Шаблон для головної HTML сторінки
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Назва виводного CSS файлу
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
  },
};
