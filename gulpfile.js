const gulp = require('gulp');
const requireDir = require('require-dir');

const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.build_js = tasks.build_js;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;
exports.rastr = tasks.rastr;
exports.default = gulp.parallel(
  exports.style,
  exports.dev_js,
  exports.html,
  exports.bs_html,
  exports.watch,
  exports.rastr,
);
