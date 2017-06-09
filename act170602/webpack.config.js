var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnext=require('postcss-cssnext');
var cssvariables=require('postcss-css-variables');
var precss=require('precss');
var apply=require('postcss-apply');
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
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
		        loaders: {
		          js: 'babel-loader?presets[]=es2015',
		          less: ExtractTextPlugin.extract({fallback:'vue-style-loader',use:['css-loader','less-loader']}),
		          css: ExtractTextPlugin.extract({fallback:'vue-style-loader',use:['css-loader']})
		        },
		        preserveWhitespace: false,
		    }
		},{
			test: /\.less$/,
			//loader: 'style!css!less!postcss'
			loader: ExtractTextPlugin.extract({fallback:'style-loader',use:['css-loader','less-loader']})
		},{
			test: /\.css$/,
			exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
			//loader: 'style!css!less!postcss'
			// loader: ExtractTextPlugin.extract({fallback:'style-loader',
			// 	use:[{loader:'css-loader'},{
			// 		loader:'postcss-loader',
			// 		options:{
			// 			plugins:function(){
			// 				return [
			// 					precss({ browsers :'last 3 versions'}),
			// 					cssnext({}),
			// 					cssvariables({})
			// 				];
			// 			}
			// 		}
			// 	}]
			// })
		},{
            test:/\.(png|jpg)$/,
            loader: "url-loader",
            query: {
                limit: 1024,
                name: '../public/images/[name].[ext]'
            }
        }]
	},
    plugins: [
    	new webpack.LoaderOptionsPlugin({
	      options: {
	        postcss: function () {
	          return [precss,cssnext,apply]
	        }
	      }
    	}),

    	// new webpack.optimize.UglifyJsPlugin({
    	// 	compress: {
    	// 		warnings: false
    	// 	}
    	// }),
    	new ExtractTextPlugin('./adr/dest/main.css'),
    
		  
    ]
};