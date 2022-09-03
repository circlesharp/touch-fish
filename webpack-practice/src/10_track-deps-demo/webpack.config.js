const path = require('path');
const { TrackDepsPlugin } = require('./trackDepsTempDir/TrackDepsPlugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new TrackDepsPlugin({
      // targetDir: './src/10_track-deps-demo/src',
      // outputDir: './src/10_track-deps-demo/dist',
    }),
  ],
  optimization: {
    providedExports: true,
    usedExports: true,
    minimize: false,
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
};
