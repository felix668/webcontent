var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: {
    'farm': [path.resolve( __dirname,'src/_farm/index.js' )],
    'test': [path.resolve( __dirname,'src/_test/index.js' )],
  },
  output: {
    path: path.resolve( __dirname,'dist' ),
    publicPath: '/act170201/adr/dist',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      lib: path.resolve( __dirname,'src/lib/' ),
      vue: 'vue/dist/vue.min.js'
    }
  },
  externals: {
    'vue': 'window.Vue'
  }
};