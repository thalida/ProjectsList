var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('connect', function(){
	connect.server({
		root: 'public',
		port: 8000
	})
});

gulp.task('browserify', function( type ){
	console.log( type )
	return browserify('./app/app.js')
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('public/js/'));
});

gulp.task('browserify-dist', function( type ){
	console.log( type )
	return browserify({ entries: ['./app/app.js', './app/analytics.js'] })
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('public/js/'));
});

gulp.task('images', function(){
	return gulp.src('./app/assets/**/*.{png,jpg,jpeg,gif,svg}')
		.pipe(gulp.dest('public/assets/'));
});

gulp.task('sass', function(){
    return sass('./app/app.scss')
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function(){
	gulp.watch('app/**/*.js', ['browserify']);
	gulp.watch('app/**/*.html', ['browserify']);
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/assets/**/*.{png,jpg,jpeg,gif,svg}', ['images']);
});

gulp.task('default', ['browserify', 'sass', 'images', 'connect', 'watch']);
gulp.task('deploy', ['browserify-dist', 'sass', 'images']);
