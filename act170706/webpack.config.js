var webpack=require("webpack");
var path=require("path");
var Ex = require("extract-text-webpack-plugin");
// var extractCss=new Ex("[name].style.css");
module.exports = {
	entry:{	
		share:"./share/index.js",
		bundle:"./src/js/index.js"
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules:[ 
			{
				test: /\.vue$/, 
				loader: 'vue-loader',
				options: {
        			loaders: {
			          	sass:Ex.extract({
			          		// publicPath:"../",
				            fallback: 'vue-style-loader',
				            use:['css-loader?minimize','sass-loader']
			          	})
			        }
			    }
			},
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 				
				exclude: /node_modules/
			},
			{ 
				test: /\.scss$/, 
				loader: Ex.extract({
					// publicPath:"../",
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
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
	plugins: [
		new Ex({
	      filename: '[name].style.css',
	      // allChunks: true  所有的CSS文件合并成1个文件, allChunks设置成true
	      // publicPath:""
	    })
	     // new webpack.ProvidePlugin({
      //       $: 'zepto'
      //   }),
    	// new webpack.optimize.CommonsChunkPlugin({
    	// 	name:"base", 
    	// 	filename:"js/base.js"
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
}else{
	module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ])
}















