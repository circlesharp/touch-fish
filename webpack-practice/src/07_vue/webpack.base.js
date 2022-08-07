const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development';

const baseConfig = {
  target: 'web',
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist/build07'),
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"',
      },
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      title: '07 pack vue',
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
        test: /\.(gif|jpg|jpeg|png|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash:4][ext]',
        },
      },
    ],
  },
};

module.exports = baseConfig;
