const path = require('path');
// const webpack = require('webpack');
const { FileListPlugin } = require('./plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
  // exclude: [path.resolve(__dirname, './src/old_src')],
  plugins: [new FileListPlugin()],
};
