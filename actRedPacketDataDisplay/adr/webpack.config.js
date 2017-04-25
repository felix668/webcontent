var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'red': './actRedPacketDataDisplay/adr/src/_red/index.js',
		'books': './actRedPacketDataDisplay/adr/src/_books/index.js'
	},
	output: {
		path: path.resolve( __dirname,'dist' ),
		publicPath: './dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			options: {
				presets: ['es2015']
			}
		},{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				preserveWhitespace: false,
			  postcss: [
			    require('autoprefixer')({
			      browsers: ['last 3 versions']
			    })
			  ]
			}
		},{
			test: /\.less$/,
			use: ['style-loader','css-loader','less-loader']
			//loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
		},{
			test: /\.scss$/,
			loader: ['style-loader','css-loader','sass-loader']
			//loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader!postcss-loader')
		}]
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
    	//new ExtractTextPlugin('[name].style.css')
    ]
};