const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
	entry: './src/app.js',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
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
	],
}
