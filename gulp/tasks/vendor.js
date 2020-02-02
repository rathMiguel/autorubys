'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('vendorCSS', () => {
  return gulp.src(config.vendor.css)
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest(config.path.dist + config.path.css))
});

gulp.task('vendorJS', () => {
  return gulp.src(config.vendor.js)
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest(config.path.dist + config.path.js))
});

gulp.task('vendorFonts', () => {
  return gulp.src(config.vendor.fonts)
  .pipe(gulp.dest(config.path.dist + config.path.css + 'fonts/'))
});

gulp.task('vendorOther', () => {
  return gulp.src(config.vendor.img)
  .pipe(gulp.dest(config.path.dist + config.path.css))
});

gulp.task('vendor', gulp.parallel('vendorCSS', 'vendorJS', 'vendorOther', 'vendorFonts'));