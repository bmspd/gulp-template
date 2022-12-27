const {
  src,
  dest,
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = function buildJs() {
  return src(['src/components/**/*.js', 'src/js/*.js'])
    .pipe(uglify())
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(concat('main.min.js'))
    .pipe(dest('build/js/'));
};
