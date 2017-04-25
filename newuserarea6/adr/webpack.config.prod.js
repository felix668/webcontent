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
          less: ExtractTextPlugin.extract({
            fallbackLoader: 'vue-style-loader',
            loader: [{
              loader: 'css-loader'
            },{
              loader: 'postcss-loader'
            },{
              loader: 'less-loader'
            }]
          })
        },
        preserveWhitespace: false,
        postcss: [
          autoprefixer
        ]
      }
    },{
      test: /\.less$/,
      //use: ['style-loader','css-loader','less-loader'],
      use: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [{
          loader: 'css-loader'
        },{
          loader: 'postcss-loader'
        },{
          loader: 'less-loader'
        }]
      })
    },{
      test: /\.scss$/,
      //loader: ['style-loader','css-loader','sass-loader']
      use: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [{
          loader: 'css-loader'
        },{
          loader: 'postcss-loader'
        },{
          loader: 'sass-loader'
        }]
      })
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
    new ExtractTextPlugin({
      filename: '[name].style.css',
      disable: false,
      allChunks: true
    })
  ],
});