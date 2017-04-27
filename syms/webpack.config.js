var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		'index': './src/index.js'
	},
	output: {
		//publicPath: './dist/',
		filename: './adr/dest/main.js'
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
	        loaders: {
	          js: 'babel-loader?presets[]=es2015',
	          less: ExtractTextPlugin.extract({fallback:'vue-style-loader',use:['css-loader','less-loader']})
	        },
	        preserveWhitespace: false,
	        postcss: [
	          autoprefixer
	        ]
	      }
	    },{
	      test: /\.css$/,
	      use:  ExtractTextPlugin.extract({fallback:'style-loader',use: ['css-loader','postcss-loader']})
	    },{
	      test: /\.less$/,
	      //use: ['style-loader','css-loader','postcss-loader','less-loader'],
	      use: ExtractTextPlugin.extract({fallback: "style-loader",use: ["css-loader","less-loader","postcss-loader"]})
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
    	//new ExtractTextPlugin('./adr/public/css/[name].style.css')
    	new webpack.LoaderOptionsPlugin({
	      options: {
	        postcss: function () {
	          return [autoprefixer];
	        }
	      }
    	}),
    	new ExtractTextPlugin('adr/public/css/[name].style.css')
    ]
};