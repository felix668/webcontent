var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'writers': './act161202/adr/src/_writers/index.js',
		'actors': './act161202/adr/src/_actors/index.js',
		'lottery': './act161202/adr/src/_lottery/index.js',
		'contact': './act161202/adr/src/_contact/index.js',
		'prizes': './act161202/adr/src/_prizes/index.js',
		'farm': './act161202/adr/src/_farm/index.js',
		'red': './act161202/adr/src/_red/index.js'
	},
	output: {
		//publicPath: './dist/',
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
			//loader: 'style!css!less!postcss'
			loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
		},{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader!postcss-loader')
		}]
	},
	vue: {
		loaders: {
			less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader'),
			sass: ExtractTextPlugin.extract('vue-style-loader','css-loader!sass-loader!postcss-loader')
		}
	},
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
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
    	new ExtractTextPlugin('[name].style.css')
    ]
};