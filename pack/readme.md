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
