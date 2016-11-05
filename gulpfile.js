var gulp = require('gulp');
var nodemon = require('nodemon');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');
var minify = require('gulp-minify');

gulp.task("serve", ["run-node"], function(){
	browserSync.init({
		proxy: "localhost:7000",
		files: ["public/**/*.*"],
		browser: ["google chrome"],
		port: "9000"
	});
});

gulp.task("run-node", function(cb){
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
			cb();
	});
});

gulp.task('inject', [], function () {
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  return gulp.src(['./public/index.html'])
             .pipe(inject(gulp.src(['./public/js/*.js', './public/css/*.css'])))
             .pipe(gulp.dest('./public/'));
});

// gulp.task('minify', function () {
//   gulp.src('./public/js/*.js')
//     .pipe(minify())
//     .pipe(gulp.dest('dist'))
// })
