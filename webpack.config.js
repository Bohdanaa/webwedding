const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		// index: './webpage/js/index.js',
		input: './webpage/js/input.js',
		// message: './webpage/js/message.js',
		post: './webpage/js/post',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
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
			template: './webpage/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/styles.css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'webpage/css', to: 'css' },
				{ from: 'webpage/scss', to: 'scss' },
				{ from: 'webpage/img', to: 'img' },
			],
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8000,
	},
};
