var webpack=require("webpack");
var path=require("path");
var Ex = require("extract-text-webpack-plugin");
module.exports = {
	entry:{	
		bundle:"./src/index",
		prize:"./src/prize",
		share:"./src/share"
		// vendor:["vue"]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath:'/dist/',//不加这个的话  chunkfile的加载路径有问题
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
				exclude: /node_modules/
			},
			{ 
				test: /\.(png|jpg|gif)$/, 
				loader: 'file-loader?name=images/[name].[ext]'
			}
		]
	},
	resolve: { 
		extensions: ['.js', '.vue','.scss']
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
    	// 	filename:"js/vendor.js",
    	// 	minChunks: Infinity
    	// })
    ],
    devServer: {
	    historyApiFallback: true,
	    inline: true,
	    // contentBase: path.join(__dirname, "./dist"),
		compress: true,
		port: 9000,
		noInfo: true
	}
//  	devtool:"eval-source-map" 
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
      },
      sourceMap: true//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
      // mangle: true
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















