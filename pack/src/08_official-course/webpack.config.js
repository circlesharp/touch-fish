const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: path.resolve(__dirname, './src/index.js'),
      dependOn: 'shared',
    },
    another: {
      import: path.resolve(__dirname, './src/another-module.js'),
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../dist/build08'),
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    // http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]
    // 将 dist 目录下的文件 serve 到 localhost:8080 下, 默认就是 output.path
    static: path.resolve(__dirname, '../../dist/build08'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
