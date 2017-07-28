var webpack = require("webpack");
var path = require("path");
var Ex = require("extract-text-webpack-plugin");
// var extractCss=new Ex("[name].style.css");
module.exports = {
	entry: {
		//share: "./share/main",
		bundle: "./src/main",
	    vendor: ["./src/js/vue.min.js", "./src/js/zepto.min.js",'swiper/dist/js/swiper.jquery.min.js']
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
		            scss: Ex.extract({publicPath:"../",fallback:'vue-style-loader',use:['css-loader','sass-loader']}),
		            css: Ex.extract({publicPath:"../",fallback:'vue-style-loader',use:['css-loader']})
					// less: Ex.extract({
					// 	fallback: 'vue-style-loader',
					// 	use: ['css-loader', 'less-loader']
					// })
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
	// resolve: {
	//        alias: {
	//            'zepto': './js/zepto.min.js'
	//        }
	//    },
	plugins: [
		new Ex({
			filename: 'css/[name].style.css',
			// allChunks: true  所有的CSS文件合并成1个文件, allChunks设置成true
			// publicPath:""
		}),
		// new webpack.ProvidePlugin({
		//       $: 'zepto'
		//   }),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "js/vendor.js",
			minChunks: Infinity
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