var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
	entry: {
		'books': [path.resolve( __dirname,'src/_books/index.js' )],
		'red': [path.resolve( __dirname,'src/_red/index.js' )],
		'farm': [path.resolve( __dirname,'src/_farm/index.js' )],
		'test': [path.resolve( __dirname,'src/_test/index.js' )],
	},
	output: {
		path: path.resolve( __dirname,'dist' ),
		publicPath: '/act170104/adr/dist',
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.vue$/,
			loader: 'babel!vue'

		},{
			test: /\.less$/,
			loader: 'style!css!less!postcss'
			//loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
		},{
			test: /\.scss$/,
			loader: 'style!css!sass!postcss'
			//loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader!postcss-loader')
		}]
	},
	vue: {
		loaders: {
			//less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader'),
			less: 'style!css!less!postcss',
			//sass: ExtractTextPlugin.extract('vue-style-loader','css-loader!sass-loader!postcss-loader'),
			sass: 'style!css!sass!postcss'
		}
	},
	postcss: function () {
        return [autoprefixer];
    },
    resolve: {
		alias: {
			vue: 'vue/dist/vue.min.js'
		}
	},
	externals: {
		'vue': 'window.Vue'
	},
    plugins: [
    	new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
    	// new webpack.optimize.CommonsChunkPlugin('common.js',[
    	// 	'index',
    	// 	//'swiper',
    	// 	'svg-qq'
    	// ]),
    	// new webpack.optimize.UglifyJsPlugin({
    	// 	compress: {
    	// 		warnings: false
    	// 	}
    	// }),
    	//new ExtractTextPlugin('[name].style.css'),
    	//new webpack.HotModuleReplacementPlugin()
    ],
};