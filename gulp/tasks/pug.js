'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const pug = require('gulp-pug');
const data = require('gulp-data');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

gulp.task('pug', () => {
  return gulp.src(config.path.pug,
    { since: gulp.lastRun('pug') }
    )
    .pipe(plumber())
    .pipe(data((file) => {
      return config;
    }))
    .pipe(pug({
      pretty: true,
      basedir: `./src/pug/`
    }))
    .pipe(rename(function (path) {
      path.extname = ".php";
    }))
    .pipe(gulp.dest(config.path.dist));
});