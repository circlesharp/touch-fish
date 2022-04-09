const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DepGraphPlugin } = require('./lib/steps/depGraphPlugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].chunk.js',
  },
  plugins: [
    // 清除构建文件夹的产物
    new CleanWebpackPlugin(),

    // 我的插件
    new DepGraphPlugin(),
  ],
  optimization: {
    // 默认 true, 告知 webpack 去确定那些由模块提供的导出内容
    // 设置为 false 之后会导致取不到 _lastSuccessfulBuildMeta
    providedExports: true,

    // 告知 webpack 去决定每个模块使用的导出内容
    // 设置为 false 之后会导致取不到 usedExports
    usedExports: true,

    // 为直观看到打包产物, 不 minimize
    minimize: false,

    // 是否拼接多个模块于一个闭包中
    concatenateModules: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          // presets: ['@babel/preset-env', { debug: true }],
          presets: [
            [
              '@babel/preset-env',
              {
                // 此处的 modules 的设置也会影响 babel 对模块化的介入 (p.s. 注意 presets 数组嵌套数组的格式)
                modules: false,

                // debug 会显示 presets 的 options, plugins
                debug: false,
                targets: 'defaults',
              },
            ],
          ],

          // 旧的写法是 modules: 'cjs'
          // 这个让 babel 对 es-module 编译成 commonjs, 导致 tree-shaking 失败
          // plugins: ['@babel/plugin-transform-modules-commonjs'],
        },
      },
    ],
  },
};
