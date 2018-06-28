const path = require('path');

module.exports = {
  entry: './scripts/init.js',
  output: {
    filename: 'init.min.js',
    path: '/srv/http/scripts'
  }
};
