var gulp = require('gulp');
var act = require('gulp-load-plugins')();
var webpackConfig = require('./webpack.config.js');


gulp.task('jade', function() {
    return gulp
        .src('markup/index.jade')
        .pipe(act.jade())
        .pipe(gulp.dest('./'))
});

gulp.task('less', function() {
    return gulp
        .src('style/index.less')
        .pipe(act.less())
        .pipe(gulp.dest('./'))
});

gulp.task('pack', function() {
    return gulp
        .src('index.js')
        .pipe(act.webpack(webpackConfig))
        .pipe(act.uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['jade', 'less'], function() {
    gulp.watch('markup/*', ['jade']);
    gulp.watch('style/*.less', ['less']);
});

