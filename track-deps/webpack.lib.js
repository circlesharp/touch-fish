const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  node: {
    __dirname: false,
  },
  entry: {
    depGraphPlugin: './lib/steps/depGraphPlugin.js',
    moveFiles: './lib/steps/moveFiles.js',
    removeUnusedExport: './lib/steps/removeUnusedExport.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib/dist'),
    filename: '[name].chunk.js',
    publicPath: '/',
  },
  optimization: {
    // 默认 true, 告知 webpack 去确定那些由模块提供的导出内容
    // 设置为 false 之后会导致取不到 _lastSuccessfulBuildMeta
    providedExports: true,

    // 告知 webpack 去决定每个模块使用的导出内容
    // 设置为 false 之后会导致取不到 usedExports
    usedExports: true,
  },
  plugins: [new TerserPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {},
      },
    ],
  },
};
