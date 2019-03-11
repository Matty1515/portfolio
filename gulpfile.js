// Gulp requirements
var gulp = require('gulp');
var sass = require('gulp-sass');

// Converts all sass files in app/scss to css files in app/css
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

// Watches for changes in all scss files and automatically converts to css
gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});