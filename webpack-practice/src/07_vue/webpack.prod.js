const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base');
const { TrackDepsPlugin } = require('./trackDepsTempDir/TrackDepsPlugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash:4].js',
  },
  optimization: {
    // 可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[chunkhash:4].css',
    }),
    new TrackDepsPlugin({
      targetDir: './src/07_vue/src',
      outputDir: './src/07_vue/dist',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              import: true, // 已经是默认为 true
              esModule: false, // vue 使用 CommonJs
            },
          },
        ],
      },
    ],
  },
});
