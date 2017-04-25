var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: {
    './adr/dist/index': [path.resolve( __dirname,'../src/_index/index.js' )],
    './adr/dist/test': [path.resolve( __dirname,'../src/_test/index.js' )],
  },
  output: {
    path: path.resolve( __dirname,'../' ),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      lib: path.resolve( __dirname,'../src/lib/' ),
      vue: 'vue/dist/vue.min.js'
    }
  },
  externals: {
    'vue': 'window.Vue'
  }
};