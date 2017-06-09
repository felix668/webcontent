'use strict';
var fs = require('fs');
const path = require('path');
var http = require('http');
var express = require('express');

var app = express();
//app.use(require('morgan')('short'));

// ************************************
// This is the real meat of the example
// ************************************
(function() {

  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  // Add the client which connects to our middleware
  // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
  // useful if you run your app from another point like django
  for( let key in webpackConfig.entry ){
    webpackConfig.entry[key].push( hotMiddlewareScript );
  }

  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    //noInfo: true, 
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, 
    path: '/__webpack_hmr', 
    heartbeat: 10 * 1000
  }));
})();

// Do anything you like with the rest of your express application.

app.use( express.static( path.resolve(__dirname,'../') ) );
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
// app.get("/multientry", function(req, res) {
//   res.sendFile(__dirname + '/index-multientry.html');
// });

// if (require.main === module) {
//   var server = http.createServer(app);
//   server.listen(process.env.PORT || 80, function() {
//     console.log("Listening on %j", server.address());
//   });
// }

app.listen( 8080, () => {
  console.log(`[HMR]Server listening on http://localhost:${8080}, Ctrl+C to stop`)
})