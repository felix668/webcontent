var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var TransferWebpackPlugin = require('transfer-webpack-plugin');

const isProd = process.env.NODE_ENV==='production';

module.exports = {
  entry: {
    './public/dist/two': [path.resolve( __dirname,'../src/_two/index.js' )],
    './public/dist/five': [path.resolve( __dirname,'../src/_five/index.js' )],

    './public/dist/test_0': [path.resolve( __dirname,'../src/_test_0/index.js' )],
    './public/dist/test_1': [path.resolve( __dirname,'../src/_test_1/index.js' )],
    
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
      vue: 'vue/dist/vue.min.js'
    }
  },
  externals: {
    'vue': 'window.Vue'
  }
};