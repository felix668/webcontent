var gulp = require('gulp'); 
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// less

gulp.task( 'less',function(){
	gulp.src( './less/*.less' )
		.pipe( less() )
		.pipe( autoprefixer({
			browsers: ['last 2 versions','Android >= 4.0']
		}) )
		.pipe( gulp.dest("./css") );
});

gulp.task( 'imagemin',function(){
	gulp.src('./src_img/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant({quality: '65-80'})]
		}))
		.pipe(gulp.dest('./image'))
})


gulp.task( "default", function(){
	gulp.watch( './src_img/*',['imagemin']);
	gulp.watch( './less/*.less',['less'] );
	
});