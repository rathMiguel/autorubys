'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const imagemin = require('gulp-imagemin');
const pngquant  = require('imagemin-pngquant');
const mozjpeg  = require('imagemin-mozjpeg');

gulp.task('images', () => {
  return gulp
    .src(`${config.path.input}images/**/*.+(jpg|jpeg|png|gif|svg)`,
      { since: gulp.lastRun('images') })
    .pipe(imagemin(
      [
        pngquant({
          quality: [0.7, 0.85],
        }),
        mozjpeg({
          quality: 85,
        }),
        imagemin.gifsicle(),
        imagemin.jpegtran(),
        imagemin.optipng(),
        imagemin.svgo({
          removeViewBox: false,
        }),
      ]
      ))
    .pipe(gulp.dest(config.path.dist));
});