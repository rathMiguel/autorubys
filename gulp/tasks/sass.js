'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const sass = require('gulp-sass');
const plumber  = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src(`${config.path.input}scss/**/*.scss`,
    { sourcemaps: true,
      since: gulp.lastRun('sass')
     })
  .pipe(plumber())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer())
  .pipe(gulp.dest(config.path.dist + config.path.css, { sourcemaps: './maps' }));
});