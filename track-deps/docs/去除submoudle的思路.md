# 去除 submoudle 的思路

webpack 插件，识别没用到的文件与导出

步骤：

1. 生成不受 git 跟踪的路径存放临时资源
2. 通过构建过程的钩子识别依赖
   1. 文件
   2. 未使用的 exports
3. 搬运代码到目标路径
4. 通过 codemods 工具取消对未使用导出的导出
5. 人力删除未使用的变量

## 1 生成不受 git 跟踪的路径存放临时资源

这个路径最好不要对项目有侵入性的更改，否则提交代码的时候需要识别并剔除  
这个路径需要存放的关键文件有：

1. deps.json: 存放依赖情况
2. index.html: vite 方案需要一个入口

## 2 通过构建过程的钩子识别依赖

目前有两个方案：webpack or vite;  
使用 webpack 的优势是不需要重新配置构建工具的配置文件，劣势是 webpack 的 tree-shaking 效果不佳  
使用 vite 的优势是 tree-shaking 效果好，配置基本算是开箱即用，劣势是需要配置

### webpack 方案

在 `compiler.hooks.done.tap` 这个钩子可以访问到 `stats.compilation._modules`  
其中的 `module?.usedExports`, `module?._lastSuccessfulBuildMeta?.providedExports` 分别提供 usedExports, providedExports

```js
// webpack.config.js or sfx.config.js

plugins: [new MyPlugin()];
```

### vite 方案

在 `renderChunk` 这个钩子可以访问到 `chunk.modules`  
其中的 `module.renderedExports`, `module.removedExports` 分别提供 renderedExports, removedExports

```js
// vite.config.js

plugins: [myPlugin()];
```

## 3 搬运代码到目标路径

这一步的目标是剔除丝毫没有引用的文件  
按照团队方案，默认是 components => business_components

步骤：

1. 使用 node 的 fs 模块复制有被引用的文件
2. 修改项目 sfx.config.js 的别名，验证文件搬运是否完整
3. 删除 submodule

## 4 通过 codemods 工具取消对未使用导出的导出

通过 jscodeshift 对源码编程

1. 分离及删除所有 ExploreNamedDeclaration
2. 新建并写入全文唯一的 export 语句
3. 拆分多声明语句

## 5 人力删除未使用的变量

参考 eslint 对未使用变量的处理方法，仅仅是提示，不会直接改代码  
因为未使用的变量移除过程是递归的，曾被使用的可能因未使用的被移除而成为未使用

步骤：

1. 运行代码
2. 解决控制台的 eslint 报错
