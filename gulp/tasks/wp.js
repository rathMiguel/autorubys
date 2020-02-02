'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const pug = require('gulp-pug');
const data = require('gulp-data');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

gulp.task('wp:copy', () => {
  return gulp.src([
    `${config.path.input + config.path.wp}**/*`,
    `!${config.path.input + config.path.wp}**/*.pug`
    ], { since: gulp.lastRun('wp:copy') })
  .pipe(gulp.dest(config.path.dist))
});

gulp.task('dist:copy', () => {
  return gulp.src([
    `${config.path.input + config.path.wp}**/*`,
    `!${config.path.input + config.path.wp}**/*.pug`
    ], { since: gulp.lastRun('dist:copy') })
  .pipe(gulp.dest(config.path.dist))
});


gulp.task('wp:pug', () => {
  return gulp.src(`${config.path.input + config.path.wp}**/*.pug`)
    // .pipe(cache('pugd'))
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