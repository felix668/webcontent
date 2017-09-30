var path = require('path')
var webpack = require('webpack')
var Ex = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    bundle: "./src/main",
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
        test: /\.(scss|css)$/,
        loader: Ex.extract({
          fallback: "style-loader",
          use: ["css-loader?minimize", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      },
      { 
        test: /\.(woff|woff2|eot|ttf|otf)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  resolve: {
    // require时省略的扩展名，如：require('app') 不需要app.js
    extensions: ['.js', '.vue','.scss']
  },
  plugins: [
    new Ex({
      filename: '[name].style.css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor", 
      filename:"vendor.js",
      minChunks: Infinity
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    compress: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
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
        NODE_ENV: "'" + process.env.NODE_ENV + "'"
      }
    })
  ])
}
