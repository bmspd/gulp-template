const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function style() {
  return src('src/scss/**/*.scss')
    .pipe(map.init()) // mapping
    .pipe(bulk()) // allows use @include
    .pipe(sass({ // compile sass
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(prefixer({ // vendor prefixes
      overrideBrowserslist: ['last 8 versions'],
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 11',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }))
    .pipe(clean({ // clean not need css
      level: 2,
    }))
    .pipe(concat('style.min.css')) // make one file
    .pipe(map.write('../sourcemaps/')) // writing sourcemap
    .pipe(dest('build/css/')) // final file
    .pipe(bs.stream());
};
