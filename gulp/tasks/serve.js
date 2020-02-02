'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const browserSync = require('browser-sync').create();

gulp.task('copy:toserver', () => {
  return gulp.src(`${config.path.dist}**/*`,
    { base: './public/',
    since: gulp.lastRun('copy:toserver')
  })
  .pipe(gulp.dest(config.path.www))
});

gulp.task('serve', done => {
  browserSync.init({
    proxy: config.path.proxy,
    startPath: config.path.start,
    notify: false,
    ghostMode: false
  })
  done()
});

gulp.task('watch', () => {
    const browserReload = done => {
        browserSync.reload()
        done()
    }
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug', 'copy:toserver', browserReload));
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass', 'copy:toserver', browserReload));
    gulp.watch('./src/babel/**/*.es6', gulp.series('babel', 'copy:toserver', browserReload));
    gulp.watch('./src/wordpress/**/*', gulp.series('wp:copy', 'wp:pug','copy:toserver', browserReload));
});

gulp.task('dev', gulp.series('copy:toserver', 'serve', 'watch'));