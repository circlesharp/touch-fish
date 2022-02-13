const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './app.js'),
  output: {
    path: path.resolve(__dirname, '../../dist/build02'),
    filename: 'app.bundle.js',
  },
};
