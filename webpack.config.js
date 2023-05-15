const path = require('path');
const {DefinePlugin} = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, { mode }) {
	return {
		mode: mode || 'development',
		devtool: 'source-map',
		entry: './src/index.tsx',
		devServer: {
			port: 8080,
			historyApiFallback: true,
			client: {
				overlay: false,
			},
		},
		output: {
			publicPath: mode === 'production' ? '/faraway-test-task' : "/",
			filename: `js/bundle${mode === "production" ? ".[fullhash]" : ""}.js`,
			chunkFilename: 'js/chunks/[name].[contenthash].js',
		},
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.less'],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					options: {
						presets: ['@babel/preset-react', '@babel/preset-typescript'],
					},
				},
				{
					test: /\.less$/i,
					use: [
						{
							loader: mode !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
						},
						'css-loader',
						{
							loader: "less-loader",
							options: {
								lessOptions: {
									javascriptEnabled: true,
									modifyVars: {
										'primary-color': '#3772FF',
										'link-color': '#3772FF',
									},
								},
							}
						}
					],
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: mode !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								modules: {
									localIdentName: mode === "production" ? "[local]-[hash:base64:5]" : "[path]__[local]--[hash:base64:5]",
								},
							},
						},
					],
				},
			],
		},
		plugins: [
			new ESLintPlugin(),
			new HtmlWebpackPlugin({
				template: './public/index.html',
				favicon: './public/favicon.ico', 
				publicPath: mode === 'production' ? '/faraway-test-task' : "/",
				minify: mode === 'production' && {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true,
				},
			}),
			new DefinePlugin({
				'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
			}),
		].concat(mode !== 'production' ? [] : [
			new MiniCssExtractPlugin({
				filename: `css/bundle${mode === "production" ? ".[fullhash]" : ""}.css`,
				chunkFilename: "css/chunks/[name].[contenthash].css",
			}),
		]),
	};
};
