'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('build', gulp.series('clean', gulp.parallel( 'images', 'pug', 'sass', 'babel', 'vendorJS', 'wp:copy', 'wp:pug')));
