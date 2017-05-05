var webpack = require('webpack');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./src/js/main.js', //唯一入口文件
    output: {
        //path:'dist', //打包目录
        filename: './dist/[name].bundle.js' //打包后的文件名
    },
    module: {
        loaders: [
            {
                 test: /\.js$/,
                 loader: 'babel-loader',
                  options: {
                    presets: ['es2015', 'stage-0']
                  }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','postcss-loader'] })
            }
        ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: function () {
            return [precss, autoprefixer];
          },
          // devServer: {
          //   contentBase: "./dist", //本地服务器所加载的页面所在的目录
          //   colors: true, //终端中输出结果为彩色
          //   historyApiFallback: true, //不跳转
          //   inline: true //实时刷新
          // }
        }
      }),
      new ExtractTextPlugin('./dist/[name].css')
    ]
}