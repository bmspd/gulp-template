const {
  src, dest,
} = require('gulp');
const include = require('gulp-file-include');
const bs = require('browser-sync');

module.exports = function html() {
  return src(['src/**/*.html', 'src/*.html'])
    .pipe(include())
    .pipe(dest('build'))
    .pipe(bs.stream());
};
