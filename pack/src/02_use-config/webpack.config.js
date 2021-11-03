const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './app.js'),
  output: {
    path: path.resolve(__dirname, '../../build02'),
    filename: 'app.bundle.js',
  },
};
