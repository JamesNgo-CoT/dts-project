/* global require */

const del = require('del'),
  gulp = require('gulp');

gulp.task('cleanup', () => del(['./dist/']));

gulp.task('copy', ['cleanup'], () => {
  return gulp.src(['./src/**', './src/**/.*'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('insert_backbone', ['copy'], () => {
  return gulp.src(['./node_modules/backbone/*.js', './node_modules/backbone/*.map'])
    .pipe(gulp.dest('./dist/test/lib/backbone/'));
});

gulp.task('insert_bootstrap', ['copy'], () => {
  return gulp.src('./node_modules/bootstrap/dist/**')
    .pipe(gulp.dest('./dist/test/lib/bootstrap/'));
});

gulp.task('insert_jquery', ['copy'], () => {
  return gulp.src('./node_modules/jquery/dist/**')
    .pipe(gulp.dest('./dist/test/lib/jquery/'));
});

gulp.task('insert_underscore', ['copy'], () => {
  return gulp.src(['./node_modules/underscore/**/*.js', './node_modules/underscore/**/*.map'])
    .pipe(gulp.dest('./dist/test/lib/underscore/'));
});

gulp.task('inserts', ['copy', 'insert_backbone', 'insert_bootstrap', 'insert_jquery', 'insert_underscore']);

gulp.task('default', ['inserts']);
