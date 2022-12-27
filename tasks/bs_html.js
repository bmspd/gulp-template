const bs = require('browser-sync');

module.exports = function bsHtml() {
  bs.init({
    server: {
      baseDir: 'build/',
      host: '192.168.0.104',
    },
    browser: 'chrome',
    logPrefix: 'BS-HTML:',
    logLevel: 'info',
    logConnections: true,
    logFileChanges: true,
    open: true,
  });
};
