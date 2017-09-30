var webpack = require("webpack");
var path = require("path");
var Ex = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		bundle: "./src/main",
	},
	output: {
		publicPath:"../",
		path: path.resolve(__dirname, './build'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					js: 'babel-loader?presets[]=es2015',
		            less: Ex.extract({publicPath:"../",fallback:'vue-style-loader',use:['css-loader','less-loader']}),
		            css: Ex.extract({publicPath:"../",fallback:'vue-style-loader',use:['css-loader']})
				}
			}
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: ['es2015'],
				plugins: [
					["transform-runtime"]
				]
			}
		}, {
			test: /\.(scss|css|less)$/, 
			loader: Ex.extract({
				publicPath:"../",
				fallback: "style-loader",
				use: ["css-loader?minimize", "sass-loader",'less-loader']
			})
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'file-loader?name=images/[name].[ext]'
		}]
	},
	plugins: [
		new Ex({
			filename: 'css/[name].style.css',
		})
	],
	devServer: {
		historyApiFallback: true,
		inline: true,
		noInfo: true
	},
	devtool: "eval-source-map"
}
if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	])
} else {
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		})
	])
}