const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  target: 'web',
  mode: 'development',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist/build07'),
    filename: 'bundle.js',
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // 让代码里面也能读取到环境变量
        // 要注意这里的语法 引号里面是一个变量
        NODE_ENV: isDev ? '"development"' : '"production"',
      },
    }),
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

if (isDev) {
  config.devtool = 'eval-cheap-module-source-map'; // source map

  config.devServer = {
    port: 8000,
    host: '0.0.0.0', // 可以同时使用 localhost 和 内网ip 访问
  };

  config.plugins.push(
    // 简称 HMR
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;
