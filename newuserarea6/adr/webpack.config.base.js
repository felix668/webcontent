var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: {
    'index': [path.resolve( __dirname,'src/_index/index.js' )],
  },
  output: {
    path: path.resolve( __dirname,'dist' ),
    publicPath: '/newuserarea6/adr/dist',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  },
  externals: {
    'vue': 'window.Vue'
  }
};