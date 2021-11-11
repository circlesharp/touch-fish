const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    print: path.resolve(__dirname, './src/print.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../dist/build08'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
};
