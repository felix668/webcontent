var webpack=require("webpack");
var path=require("path");
var Ex = require("extract-text-webpack-plugin");
module.exports = {
	//entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件  
	entry:{
		//common:["./dist/local.js","./dist/common1.js","./dist/abook.js"],	
		// share:"./adr/share/index.js",
		bundle:"./adr/src/js/index.js"
		// vendor:['./js/zepto.min.js',"./js/vue.min.js"]
	},
	output: {
		path: path.resolve(__dirname, 'adr/dist'),
		// publicPath:"../",
		filename: '[name].js'
		// chunkFilename: "[id]].js",
	},
	module: {
		loaders: [
			// 解析.vue文件
			{ test: /\.vue$/, loader: 'vue' },
			// 转化ES6的语法
			{ test: /\.js$/, loader: 'babel', presets: ['es2015'],exclude: /node_modules/ },
			// 编译css并自动添加css前缀  感叹号的作用在于使同一文件能够使用不同类型的loader
			// { test: /\.css$/, loader: Ex.extract("style","css!postcss")},
			//.scss 文件想要编译，scss就需要这些东西！来编译处理
			//install css-loader style-loader sass-loader node-sass --save-dev
			//ExtractTextPlugin.extract 第二个参数(或拆分为多个参数)中loader的执行顺序是从右到左，即先对引入的.sass使用sass loader得到编译后的css再使用css-loader按照正常css-loader的方式处理。
			{ test: /\.scss$/, loader: Ex.extract("style",'css!sass!postcss')},
			//?modules css模块
			// { test: /\.scss$/, loader: 'style!css!sass'},
			// { test: /\.less$/, loader: 'style!css!less'},
			// { test: /\.css$/, loader: Ex.extract("style", "css?-url")},
			{ test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]'}
			// 图片转化，小于8K自动转化为base64的编码
			// {test: /\.(png|jpg|gif)$/, loader: 'url-loader?name=images/[hash].[name].[ext]'}
			// test:/\.(woff|svg|ttf|eot)$/,loader:'url-loader?limit=10000'}//限制大小小于10k的 icofont
			//html模板编译？
			// { test: /\.(html|tpl)$/, loader: 'html-loader'},
// 　　　　　　{test: /\.html$/,loader: 'html-withimg-loader'}
		]
	 },
	 vue: {
		loaders: {
			less: Ex.extract('vue-style-loader','css-loader!less-loader!postcss-loader'),
			sass: Ex.extract('vue-style-loader','css-loader!sass-loader!postcss-loader')
		}
	},
	// resolve:{
 //        //开启后缀自动补全功能
 //        extensions:['','.js','.json']
 //    },
	postcss: [
	    //require('autoprefixer')调用autoprefixer插件
	],
	plugins: [
		// new webpack.DefinePlugin({
	 //      'process.env': {
	 //        NODE_ENV: '"development"'
	 //      }
	 //    }),
    	new Ex("[name].style.css",{
		    allChunks: true
		})
    	//new webpack.optimize.CommonsChunkPlugin("common.chunk.js", ["share", "bundle"])
    	// new webpack.optimize.CommonsChunkPlugin("common","common.js")
    ],
     // 	new webpack.ProvidePlugin({  全局变量
	    //     Vue : "vue"
	    // }),
      	//new webpack.optimize.UglifyJsPlugin(),
      	//new webpack.HotModuleReplacementPlugin(),
      	// new webpack.NoErrorsPlugin()  允许错误不打断程序
  	
	// alias: {模块别名
		//filter: path.join(__dirname, 'images')
		//'sns': './src/sns-v1.js',
        //'native': './src/native-v1.js'
	// }
	// ,
	// devServer: {
 //        contentBase: "",  //默认以根目录提供文件 资源的相对路径
 //        colors: true,
//         devtool: 'eval-source-map',
 //        historyApiFallback: true,
 //        inline: true,
 			// hot:true,//自动刷新
 			// port:3005
 //    },
 	devtool:"eval-source-map"
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
    }),
    new webpack.optimize.OccurenceOrderPlugin()
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















