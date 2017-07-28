var webpack=require("webpack");
var path=require("path");
var Ex = require("extract-text-webpack-plugin");
// var extractCss=new Ex("[name].style.css");
module.exports = {
	entry:{	
		// share:"./share/index",
		bundle:"./src/index",
		prize:"./src/prize",
		share:"./src/share"
		// vendor:["./js/vue.min","./js/fastclick.min","./js/zepto.min"]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].js'
		// chunkFilename:"chunk/[name].js"
	},
	module: {
		rules:[ 
			{
				test: /\.vue$/, 
				loader: 'vue-loader',
				options: {
        			loaders: {
			          	sass:Ex.extract({
			          		publicPath:"../",
				            fallback: 'vue-style-loader',
				            use:['css-loader?minimize','sass-loader']
			          	})
			        }
			    }
			},
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 				
				exclude: /node_modules/,
				options:{
					presets: [['es2015', {modules: false}]],
					plugins:[
						'syntax-dynamic-import'
					]
				}
			},
			{ 
				test: /\.scss$/, 
				loader: Ex.extract({
					publicPath:"../",
					fallback:"style-loader",
					use:["css-loader?minimize","sass-loader"]
				})
			},
			{ 
				test: /\.(png|jpg|gif)$/, 
				loader: 'file-loader?name=images/[name].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue','.scss'],
        alias: {
            'vue': './src/js/vue.min.js'
        }
    },
	plugins: [
		new Ex({
	      filename: 'css/[name].style.css',
	      // allChunks: true  所有的CSS文件合并成1个文件, allChunks设置成true
	      // publicPath:""
	    })
	     // new webpack.ProvidePlugin({
      //       $: 'zepto'
      //   }),
    	// new webpack.optimize.CommonsChunkPlugin({
    	// 	name:"vendor", 
    	// 	filename:"vendor.js",
    	// 	minChunks: Infinity
    	// })
    ],
    devServer: {
	    historyApiFallback: true,
	    inline: true,
	    noInfo: true
	}
 	// devtool:"eval-source-map" 
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
}else if(process.env.NODE_ENV === 'development'){
	module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ])
}else{
	module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"local"'
      }
    })
  ])
}















