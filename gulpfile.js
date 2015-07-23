var gulp = require('gulp');
var act = require('gulp-load-plugins')();


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


gulp.task('default', ['jade', 'less'], function() {
    gulp.watch('markup/*', ['jade']);
    gulp.watch('style/*.less', ['less']);
});

