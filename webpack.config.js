const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const webpack = require('webpack')

module.exports = args => {
	const IS_PROD = args.NODE_ENV === 'production'

	const DESCRIPTION = 'Kterým směrem se vydat a nevydat, když je nejhůře?'
	const BASE_URL = IS_PROD ? '/where-is/' : '/'

	return {
		mode: IS_PROD ? 'production' : 'development',
		entry: './src/app.js',
		output: {
			filename: '[name].[hash].js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: BASE_URL,
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
					description: DESCRIPTION,
				},
				filename: 'index.html',
			}),
			new WebpackPwaManifest({
				name: 'Kde je Brno?',
				short_name: 'Brno?',
				description: DESCRIPTION,
				filename: 'manifest.[hash].webmanifest',
				start_url: BASE_URL,
				theme_color: '#cb0e21',
				background_color: '#000000',
				orientation: 'any',
				icons: [36, 96, 128, 192, 256, 384, 512, 1060].map(function(size) {
					return {
						size,
						src: path.resolve(`src/images/app-icon/${size}.png`),
					}
				}),
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
