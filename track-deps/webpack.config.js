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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
};
