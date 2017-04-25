var gulp = require('gulp');
var sass = require('gulp-sass');
//var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
//var plumber = require('gulp-plumber');


//预编译sass
gulp.task('sass', function(){
  return gulp.src('css/index.scss')
    .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'));
});


//检查JS语法
// gulp.task('jshint', function() {
//     return gulp.src(['js/*.js', '!js/*min.js'])// 要检查的js文件
//      .pipe(jshint({
//         node: true,
//         nomen: true,
//         sloppy: true,
//         plusplus: true,
//         unparam: true,
//         stupid: true
//      }));
// });


gulp.task('browserSync', function() {
    browserSync({
        server: {
            //指定服务器启动根目录
            baseDir: './'
        }
    });
});


//watch监听
gulp.task('watch', function(){
    gulp.watch('css/index.scss', ['sass']);
    //gulp.watch('app/*.js', ['jshint']);
    gulp.watch('*.html', ['browserSync']).on('change', browserSync.reload);
    gulp.watch("css/*.css", ['browserSync']).on('change', browserSync.reload);
    gulp.watch("js/*.js", ['browserSync']).on('change', browserSync.reload);
  // Other watchers
});











