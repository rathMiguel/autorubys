'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const babel = require('gulp-babel');
const plumber  = require('gulp-plumber');

gulp.task('babel', () => {
    return gulp.src([
      `${config.path.input}babel/**/*.es6`,
      `!${config.path.input}babel/**/_*.es6`
      ],
      { since: gulp.lastRun('babel') }
      )
    .pipe(plumber())
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest(config.path.dist + config.path.js));
});