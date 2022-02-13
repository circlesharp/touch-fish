const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './main.js'),
    alpha: path.resolve(__dirname, './a.js'),
    beta: path.resolve(__dirname, './b.js'),
  },
  output: {
    publicPath: 'https://tan-rong-zhao.com/', // 配置上线后的地址
    path: path.resolve(__dirname, '../../dist/build04'),
    filename: 'js/[name].[chunkhash].js', // 可写路径 => js/
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html', // 可以使用模板
      inject: 'body', // script 嵌入到 'head' | 'body' | false
      customTitle: 'custom title from htmlWebpackPlugin', // 自定义的 key, ejs 插值
      date: new Date(),
      minify: {
        removeComments: true, // 删除注释
        collapseWhitespace: true, // 删除空格
      },
    }),
  ],
};
