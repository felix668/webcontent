var path = require('path');
var gulp = require('gulp');
var shell = require('gulp-shell');

var WEBPACK2 = [{
  name: 'webpack',
  watched: [
    `${path.resolve(__dirname,'./src/*.*')}`,
    `${path.resolve(__dirname,'./src/**/*.*')}`
  ],
  config: `${path.resolve(__dirname,'./build/webpack.config.prod.js')}`,
  tpl: 'node ./src/tpl/tpl.js'
}]
var gulputil = require('gulp-util')
var webpack2 = require('webpack');

WEBPACK2.forEach(a=>{
  gulp.task( a.name,function(){
    if( process.env.NODE_ENV==='production' ){
      webpack2( require(a.config),function(e,stats){
        if(e){
          throw new gulputil.PluginError('webpack',e)
        };
        //if( stats.hasErrors() ){
        //};
        gulputil.log('[webpack]',stats.toString({
          chunks: false,
          colors: true
        }));
        console.log('[webpack] bundling done.')
      });
    };
    if( a.tpl ){
      gulp.src('')
        .pipe( shell(a.tpl) );
      console.log(`[tpl] ${process.env.NODE_ENV+' '}html generated.`)
    }
  })
})

gulp.task( 'env-dev',()=>{
  process.env.NODE_ENV = 'development';
})
gulp.task( 'env-prod',()=>{
  process.env.NODE_ENV = 'production';
})

const DEV = [{
  name: 'dev',
  WEBPACK_CONFIG: path.resolve(__dirname,'./build/webpack.config.dev.js')
}];
DEV.forEach(a=>{
  gulp.task( a.name,['env-dev','watch','webpack'],()=>{
    process.env.NODE_ENV = 'development';
    process.env.WEBPACK_CONFIG = a.WEBPACK_CONFIG;
    gulp.src('')
      .pipe( shell(`node ./build/server.hot.js`) );
  } )
})

gulp.task( 'watch',()=>{
  WEBPACK2.forEach((a)=>{
    gulp.watch( a.watched,[a.name] );
  })
})

gulp.task( "default",['env-prod','watch','webpack'], function(){
  process.env.NODE_ENV = 'production';
});