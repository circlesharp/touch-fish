const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  devtool: 'eval-cheap-module-source-map', // source map
  devServer: {
    port: 8000,
    host: '0.0.0.0',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'vue-style-loader' },
          {
            loader: 'css-loader',
            options: {
              import: true, // 已经是默认为 true
              esModule: false,
            },
          },
        ],
      },
    ],
  },
});
