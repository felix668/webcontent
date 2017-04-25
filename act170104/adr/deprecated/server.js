const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path')

var config = require("./webpack.config.js");

config.entry.books.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  //contentBase: path.resolve( __dirname,'act170104/adr/' ),
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  progress: true,
  port: 8080
});
server.listen(8080);