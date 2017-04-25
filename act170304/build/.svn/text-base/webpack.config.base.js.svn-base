var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

const isProd = process.env.NODE_ENV==='production';

module.exports = {
  entry: {
    './adr/dist/main': [path.resolve( __dirname,'../src/_main/index.js' )],
    './adr/dist/test': [path.resolve( __dirname,'../src/_test/index.js' )],
    './adr/dist/guide': [path.resolve( __dirname,'../src/_guide/index.js' )],
  },
  output: {
    path: path.resolve( __dirname,'../' ),
    publicPath: '/',
    filename: `[name].bundle${isProd?'':'.dev'}.js`
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