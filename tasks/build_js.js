const {
  dest,
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function buildJs() {
  const b = browserify({
    entries: './src/js/main.js',
    debug: true,
  });
  return b.bundle()
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/js/'))
    .pipe(bs.stream());
};