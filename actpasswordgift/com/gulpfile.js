var gulp=require('gulp');
var webpack = require('webpack-stream');
var watch=require('gulp-watch');
//var sass=require('gulp-sass');//在gulpfile中引入插件，用变量保存
//var browserSync = require('browser-sync');
//在任务中使用
// gulp.task("sass",function(){
// 	return gulp.src('css/*.sass')
// 	.pipe(sass())
// 	.pipe(gulp.dest('css'));
// });
// //gulp.watch('test/scss/*.scss', ['sass']);
// gulp.task("watch",function(){
// 	gulp.watch('css/*.sass', ['sass']);
	
// });
// gulp.task("js",function(){
// 	return gulp.src('src/*.vue')
// 	.pipe(gulp.dest('./'));
// });
// //gulp.watch('test/scss/*.scss', ['sass']);
// gulp.task("watch",function(){
// 	gulp.watch('src/*.vue', ['js']);
	
// });
gulp.task('wather', function() {
	return watch('src/*.vue',function(){
		gulp.src("")
			.pipe( webpack( require("./webpack.config.js") ) )
			.pipe( gulp.dest("./") );
	})
	
});
// gulp.task('uglify',function(){
// 	return gulp.src("")
// 				.pipe( webpack( require("./webpack.config.js") ) )
// 				.pipe( gulp.dest("./") );
// });
gulp.task("default",["wather"],function(){});