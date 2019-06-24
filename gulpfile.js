var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

function JS() {
    return gulp.src('src/jquery.remove-class-by-mask.js')
        .pipe(gulp.dest('dist'));
}

function minJS() {
    return gulp.src('src/jquery.remove-class-by-mask.js')
        .pipe(uglify())
        .pipe(rename('jquery.remove-class-by-mask.min.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('build', gulp.series(
    JS,
    minJS
));