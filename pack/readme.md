# Webpack Practice

## 1 hello-world

格式(具体路径记得用 ./ 开头)：
`npx webpack --entry <entry> --output-path <output-path>`
`npx webpack --entry ./src/01_hello-world/hello.js --output-path ./build01 --mode development`

使用 loader(例如引入 .css 文件):
引入的路径需要处理成: `<loader-name>!<path>`
可以在 .js 文件中引入 .css 文件(但效果不会作用在 .html 上): `import 'css-loader!./style.css';`
除非，追加 style-loader(新建一个 style 标签插入到 .html 里面): `style-loader!css-loader!./style.css`
ps: 旧版支持 `--module-bind 'css=style-loader!css-loader'`

一些参数：
监听文件更新: `xxx --watch`
构建进度: `xxx --progress`

## 2 use-config

维护一个 webpack.config.js 文件
注意，使用 commonJS 规范
`npx webpack --config ./src/02_use-config/webpack.config.js`

可以写进 package.json 中
`"pack02": "webpack --config ./src/02_use-config/webpack.config.js"`

## 3 multi-entry

entry 可以传入 string | Array | Object
如果是多入口，需要同时设置 output, 并使用 ['name' | 'hash' | 'chunkhash']

## 4 html-plugin

### 插件

插件需要先安装，并引入，在 plugins 的数组中，实例化插件
`plugins: [new htmlWebpackPlugin()]`

> webpack 也是有 context 的，也就是上下文

### htmlWebpackPlugin

可配置的参数： template， filename， inject, chunks, excludeChunks...

> 可以 npm 上看[详细文档](https://www.npmjs.com/package/html-webpack-plugin)

支持 esj 语法插值
`<%= htmlWebpackPlugin.options.customTitle %>`
`<script src="<%= htmlWebpackPlugin.files.js[0] %>"></script>`

直接注入 inline assets, 可减少请求次数
`compilation.assets[...].source()`

## 6 loader-and-assets

使用 babel-loader 来处理 .js 文件

> ps. 这个过程比较耗性能，记得 exclude node_module

使用多个 loader 组合来处理样式文件
postcss-loader 还可以使用插件
[postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env): lets you convert modern CSS into something most browsers can understand

分别使用 html-loader, ejs-loader 来处理不同的模板文件
ejs-loader 生成一个函数，使得模板能够接受参数

## 8 webpack official

### 代码分离

1. 入口起点： 使用 entry 配置手动地分离代码
2. 防止重复： 使用 Entry dependencies / SplitChunksPlugin 去重和分离 chunk
3. 动态导入： 通过模块的内联函数调用来分离代码

#### dependOn

1. 配置 dependOn 选项，这样可以在多个 chunk 之间共享模块
2. 如果一个 HTML 页面使用多个入口，需要设置 `optimization.runtimeChunk: 'single'`

```js
module.exports = {
  // ...
  optimization: {
    runtimeChunk: 'single',
  },
};
```

#### SplitChunksPlugin

1. 可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

2. 由社区提供的 mini-css-extract-plugin

#### 动态导入

1. 使用 import() 语法, p.s. 相较于静态导入的 import
2. webpack4 为 CommonJs 模块创建一个 artificial namespace 对象
3. prefetch / preload
