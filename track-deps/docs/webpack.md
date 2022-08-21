# webpack 插件机制 - 一切皆插件

## 1 tapable
tapable 是什么?
1. 是一种发布订阅的模式
2. 是一个流水线
3. 是一个有多种风格的流水线 (多种钩子)
4. 是 webpack 插件机制的心脏

是一种发布订阅的模式
``` js
// tapable 实例 (钩子)
const hook = new SyncHook(['arg1', 'arg2']);

// register 订阅
hook.tap('flag1', (arg1, arg2) => {
  console.log('flag1:', arg1, arg2);
});

// call 发布
hook.call('hello', 'world');
```

是一个流水线
``` js
const hook = new SyncHook(['arg1', 'arg2']);

// 做第一件事情
hook.tap('flag1', (arg1, arg2) => {
  console.log('flag1:', arg1, arg2);
});

// 做第二件事情
hook.tap('flag2', (arg1, arg2) => {
  console.log('flag2:', arg1, arg2);
});

// 还可以做更多事情
// ....

hook.call('hello', 'world');
```

是一个有多种风格的流水线 (多种钩子)
1. 同步钩子 SyncHook
2. 保险钩子 SyncBailHook
3. 异步串联钩子 AsyncSeriesHook

![SyncHook](webpack_files/1.jpg)
![SyncBailHook](webpack_files/2.jpg)

是 webpack 插件机制的心脏

## 2 一切皆插件: ppt & source code
> v4.41.5 && v5.74.0
webpack 关键的 tapalbe 实例
其中的 compiler 是最主要的, 插件就是对 compiler 对象的一系列操作
1. compiler aka 老大
2. compilation aka 依赖图
3. resolver aka 老马
4. moduleFactories 生成模块对象
5. parser 生成AST
6. template 渲染

### compiler
file: Compiler, lib\Compiler.js

compiler 上面的钩子
![compiler hooks](webpack_files/3.jpg)
![hook.done tap](webpack_files/8.jpg)
![hook.done call](webpack_files/4.jpg)


compiler 上面有其他重要的 tapable 实例
``` js
// ResolverFactory line 146
this.resolverFactory = new ResolverFactory();

// NormalModuleFactory line 636~641
const normalModuleFactory = new NormalModuleFactory(/*xxx*/);
this.hooks.normalModuleFactory.call(normalModuleFactory);
```

### compilation
> 待 part 3 依赖图 & ESM 详解
file: Compilation, lib\Compilation.js

### resolver
file: ResolverFactory, lib\ResolverFactory.js

### moduleFactories
file: NormalModuleFactory, ContextModuleFactory, DllModuleFactory, MultiModuleFactory

![moduleFactory & parser](webpack_files/5.jpg)
![compiler.compilation vs compilation](webpack_files/7.jpg)
![compilation 是 compiler.compilation.call()/tap() 的参数](webpack_files/6.jpg)

### parser
file: Parser && JavascriptModulesPlugin

### template
file: ModuleTemplate, lib\ModuleTemplate.js

## 3 依赖图
1. compilation 对象就是依赖图
2. buildMeta.providedExports: FlagDependencyExportsPlugin
3. usedExports: FlagDependencyUsagePlugin
4. 时机: compiler.hooks.done

![config providedExports](webpack_files/10.jpg)
![config usedExports](webpack_files/11.jpg)
![config use plugin](webpack_files/9.jpg)

### compilation 对象就是依赖图
![compilation.modules](webpack_files/16.jpg)
![a single module](webpack_files/17.jpg)


### FlagDependencyExportsPlugin & FlagDependencyUsagePlugin

lib\FlagDependencyUsagePlugin.js
``` js
// line91 当前的模块C用到模块R的导出, 就把这个 importedNames 记录在模块R的 usedExports 之中
processModule(referenceModule, importedNames);

// line38 processModule
module.usedExports = addToSet(module.usedExports || [], usedExports);
```


lib\FlagDependencyExportsPlugin.js
``` js
// line49 processDependency (准确来说, 应该叫 processExports)
const exportDesc = dep.getExports && dep.getExports();
const exports = exportDesc.exports;
addToSet(moduleProvidedExports, exports)

// line122 主程序
module.buildMeta.providedExports = Array.from(moduleProvidedExports);
```

### compiler.hooks.done

官网文档说明
![docs compiler.done](webpack_files/12.jpg)

源码中一处被调用的地方
![src call](webpack_files/13.jpg)

sync => async
![toAsync 1](webpack_files/14.jpg)
![toAsync 2](webpack_files/15.jpg)

## 3 依赖图(webpack5)
1. compilation 对象就是依赖图
2. compilation.moduleGraph.getExportsInfo(module) => exportsInfo

### 术语
ModuleGraphModule: ModuleGraph.prototype._moduleMap 的成员
ModuleGraphConnection: ModuleGraph.prototype._dependencyMap 的成员
ExportsInfo: getProvidedExports, getUsedExports
runtime??
HarmonyExportInitFragment: 模板生成的地方
getUsedName 若为 false, 则不写入 `__webpack_require__.d`
block 的概念要理清
HarmonyImportSpecifierDependency 就是 `import { xxx } from './xxx.js';`
HarmonyExportSpecifierDependency 就是 `export const xx = abc`
![HarmonyExportSpecifierDependency.prototype.getExports()](webpack_files/18.jpg)

### FlagDependencyUsagePlugin
1. processEntryDependency => processReferencedModule
2. processModule
3. setUsed 设置了 _globalUsed, _usedInRuntime
4. ModuleGraph.prototype.getUsedExports 有真正的含义
5. 通过 ModuleGraph.prototype.getUsedExports/getProvidedExports 能够满足需求, 等价于 ExportsInfo.prototype.getUsedExports/getProvidedExports
6. getUsedExports 是通过 exportInfo.getUsed 与 UsageState 枚举判断而得的
7. getUsed 的值是由 setUsed 来设置的, setUsed 由 setUsedWithoutInfo, setUsedWithoutInfo, setAllKnownExportsUsed 调用, 这些函数在 FlagDependencyUsagePlugin.js 中被调用

### FlagDependencyExportsPlugin
1. 多种类型的依赖有对应的 getExports 方法, 但这个方法只返回了一个带 exported names(key 为 exports) 的结构 (exportDesc)
2. getProvidedExports 获取 _exports 的项 (exportInfo) 的 name
3. FlagDependencyExportsPlugin 调用了 ExportsInfo.prototype.restoreProvided
4. restoreProvided 调用了 this.getExportInfo (实际上没有会先set), 这样 this._exports 就收集了 providedExports



## Tree Shaking
### webpack 怎么去掉无用依赖的, 即 webpack 怎么实现 tree-shaking
1. 依赖图的建立已经剔除了未使用的文件
2. 识别到 usedExports 就可以剔除未使用的导出

### webpack 无法 tree-shaking 的原因
1. 表层原因: usedExports & providedExports 无法正常生成
2. 根因: [tree-shaking-like-a-pro](https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7#43e1)

