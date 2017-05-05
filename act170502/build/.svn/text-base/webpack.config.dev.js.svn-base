var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var base = JSON.parse( JSON.stringify(require('./webpack.config.base.js')) );

module.exports = Object.assign(base,{
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
        },
        preserveWhitespace: false,
        postcss: [
          autoprefixer
        ]
      }
    },{
      test: /\.less$/,
      use: ['style-loader','css-loader','postcss-loader','less-loader'],
    },{
      test: /\.scss$/,
      use: ['style-loader','css-loader','postcss-loader','sass-loader']
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer];
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
});