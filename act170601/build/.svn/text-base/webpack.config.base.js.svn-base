var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

const isProd = process.env.NODE_ENV==='production';

module.exports = {
  entry: {
    './public/dist/main': [path.resolve( __dirname,'../src/_main/index.js' )],
    
  },
  output: {
    path: path.resolve( __dirname,'../' ),
    publicPath: '/',
    filename: `[name].bundle${isProd?'':'.dev'}.js`
  },
  resolve: {
    alias: {
      components: path.resolve( __dirname,'../src/components/' ),
      lib: path.resolve( __dirname,'../src/lib/' ),
      vue: 'vue/dist/vue.min.js',
      store: path.resolve( __dirname,'../src/store/' ),
    }
  },
  externals: {
    'vue': 'window.Vue'
  }
};