const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist/build07'),
    filename: 'bundle.js',
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              import: true, // 已经是默认为 true
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/i,
        use: [
          // 请不要使用 file-loader
          {
            loader: 'url-loader', // 特色是使用 limit
            options: {
              limit: 1024000, // base64
              name: '[name].[ext]',
              esModule: false, // vue 执行 commonjs, 非 file-loader 默认的 es
            },
          },
        ],
      },
    ],
  },
};
