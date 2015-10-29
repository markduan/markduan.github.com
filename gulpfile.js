var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('less', function() {
  return gulp.src('*.less')
    .pipe(less({paths: ['./']}))
    .pipe(gulp.dest('./'));
});

gulp.task('autoprefixer', function() {
  return gulp.src('*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch('*.less', ['less', 'autoprefixer', 'reload-browser']);
  gulp.watch('index.html', ['reload-browser']);
  gulp.watch('*.js', ['reload-browser']);
});

gulp.task('connect', function() {
  return connect.server({
    livereload: true,
  });
});

gulp.task('reload-browser', function () {
  return gulp.src('./*.html')
    .pipe(connect.reload())
});


gulp.task('default', ['less', 'connect', 'watch']);
