var gulp = require("gulp");
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

//liveload
gulp.task("serve", ["run-node"], function(){
	browserSync.init({
		proxy: "localhost:7000",
		files: ["client/**/*.*"],
		browser: ["google chrome"],
		port: "9000",
		startPath: "/index.html"
	});
});

gulp.task("run-node", function(cb){
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
			cb();
	});
});



var bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject');
gulp.task('index', function () {
  gulp.src('./public/index.html')
    .pipe(inject(gulp.src(bowerFiles(), {base: './public/', read: false}), {name: 'bower'}))
    .pipe(inject(es.merge(
      gulp.src('./public/**/*.css'),
      gulp.src('./public/**/*.js', {read: false})
    )))
    .pipe(gulp.dest('./public/'));
});
