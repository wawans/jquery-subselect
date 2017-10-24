var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
	minify = require('gulp-minify'),
    concat = require('gulp-concat');
	
gulp.task('uglify', function() {
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(concat('jquery.subselect.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('duplicate', function() {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['uglify','duplicate']);

