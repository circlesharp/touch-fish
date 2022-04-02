const path = require('path');
const webpack = require('webpack');

const { TemplatePlugin } = require('./plugins/TemplatePlugin');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].chunk.js',
  },
  plugins: [new TemplatePlugin('src')],
  optimization: {
    // 默认 true, 告知 webpack 去确定那些由模块提供的导出内容
    // 设置为 false 之后会导致取不到 _lastSuccessfulBuildMeta
    providedExports: true,

    // 告知 webpack 去决定每个模块使用的导出内容
    // 设置为 false 之后会导致取不到 usedExports
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
};
