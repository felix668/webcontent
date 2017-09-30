var path = require('path')
var webpack = require('webpack')
var Ex = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    index: "./src/index",
    live: "./src/live.js",
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            sass: Ex.extract({
              publicPath: '../build/',
              fallback: 'vue-style-loader',
              use: ['css-loader?minimize', 'sass-loader']
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { 
        test: /\.(woff|woff2|eot|ttf)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue','.scss']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
    new Ex({
      filename: '[name].css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor", 
      filename:"vendor.js",
      minChunks: Infinity
    })
  ],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
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
  //server模式下不能设置process.env
	// module.exports.plugins = (module.exports.plugins || []).concat([
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"local"'
  //     }
  //   })
  // ])
}
