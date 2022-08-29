const path = require('path');
// const webpack = require('webpack');
const { TrackDepsPlugin } = require('./trackDepsTempDir/TrackDepsPlugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
  },
  stats: {
    logging: 'verbose',
  },
  devtool: 'source-map',
  plugins: [
    new TrackDepsPlugin({
      // targetDir: './src/09_migration/src',
      // outputDir: './src/09_migration/dist',
    }),
  ],
  optimization: {
    providedExports: true,
    usedExports: true,
    minimize: false,
    sideEffects: false,
  },
};
