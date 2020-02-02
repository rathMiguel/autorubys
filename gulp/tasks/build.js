'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const del = require('del');

gulp.task('clean', () => {
  return del(config.path.dist + '**/*');
});