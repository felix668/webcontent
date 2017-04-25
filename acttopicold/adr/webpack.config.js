var webpack=require("webpack");
var Ex = require("extract-text-webpack-plugin");
module.exports = {
	//devtool: 'eval-source-map',
	//entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件  
	entry:{
		//common:["./dist/local.js","./dist/common1.js","./dist/abook.js"],
		bundle:"./src/index.js",
		// zepto:['./js/zepto.min.js'],
		vendor:['./js/zepto.min.js',"./js/vue.js"]
	},
	output: {
		//path: path.join(__dirname, ''),
		filename: '[name].js',
		//chunkFilename: "[name].[chunkHash:8].js",
	},
	// resolve: {
 //        extensions: ['', '.js', '.vue']
 //    },
	module: {
		loaders: [
			// 解析.vue文件
			{ test: /\.vue$/, loader: 'vue' },
			// 转化ES6的语法
			{ test: /\.js$/, loader: 'babel', presets: ['es2015'],exclude: /node_modules/ },
			// 编译css并自动添加css前缀  感叹号的作用在于使同一文件能够使用不同类型的loader
			{ test: /\.css$/, loader: Ex.extract("style","css!postcss")},
			//.scss 文件想要编译，scss就需要这些东西！来编译处理
			//install css-loader style-loader sass-loader node-sass --save-dev
			//ExtractTextPlugin.extract 第二个参数(或拆分为多个参数)中loader的执行顺序是从右到左，即先对引入的.sass使用sass loader得到编译后的css再使用css-loader按照正常css-loader的方式处理。
			// { test: /\.scss$/, loader: Ex.extract("style",'css!sass!postcss')},
			//?modules css模块
			{ test: /\.sass$/, loader: 'style!css!sass'},
			{ test: /\.less$/, loader: 'style!css!less'},
			// 图片转化，小于8K自动转化为base64的编码
			{ test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=images/[hash].[ext]'}
			//{test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=../images/[hash].[ext]'}
			//html模板编译？
			// { test: /\.(html|tpl)$/, loader: 'html-loader'}
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
	    require('autoprefixer')//调用autoprefixer插件
	],
	plugins: [
    	new Ex("main.css"),
    	new webpack.optimize.CommonsChunkPlugin({
    		name:"vendor",
    		filename:"vendor.js"
    	})
     // 	new webpack.ProvidePlugin({  
	    //     Vue : "vue"
	    // }),
      	//new webpack.optimize.UglifyJsPlugin()
  	],
	alias: {
		//filter: path.join(__dirname, 'images')
		//'sns': './src/sns-v1.js',
        //'native': './src/native-v1.js'
	}
	// ,
	// devServer: {
 //        contentBase: "",  //默认以根目录提供文件
 //        colors: true,
 //        historyApiFallback: true,
 //        inline: true
 //    }
};
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
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
