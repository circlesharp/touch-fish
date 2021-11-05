const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './main.js'),
    a: path.resolve(__dirname, './a.js'),
    b: path.resolve(__dirname, './b.js'),
  },
  output: {
    path: path.resolve(__dirname, '../../dist/build05'),
    filename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
      filename: 'a.html',
      title: 'Page A',
      chunks: ['main', 'a'],
      inject: false,
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
      filename: 'b.html',
      title: 'Page B',
      chunks: ['main', 'b'],
      inject: false,
    }),
  ],
};
