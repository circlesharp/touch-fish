const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    alpha: path.resolve(__dirname, './a.js'),
    beta: path.resolve(__dirname, './b.js'),
  },
  output: {
    path: path.resolve(__dirname, '../../dist/build03'),
    filename: '[name].[chunkhash].js', // chunkhash => 文件的版本号 / md5 值
  },
};
