const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = args => {
	const IS_PROD = args.NODE_ENV === 'production'

	return {
		mode: IS_PROD ? 'production' : 'development',
		entry: './src/app.js',
		output: {
			filename: '[name].[hash].js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: IS_PROD ? '/where-is/' : '/',
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: IS_PROD
									? '[hash:base64:5]'
									: '[local]--[hash:base64:5]',
							},
						},
					],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Kde je brno?',
				meta: {
					viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
					description: 'Kterým směrem se vydat a nevydat, když je nejhůře?',
				},
				filename: 'index.html',
			}),
			new webpack.DefinePlugin({
				DEFAULT_LOCATION: JSON.stringify({
					latitude: 50.0796689,
					longitude: 14.4297084,
				}),
				TARGET_LOCATION: JSON.stringify({
					latitude: 49.2020489,
					longitude: 16.5079214,
				}),
			}),
		],
	}
}
