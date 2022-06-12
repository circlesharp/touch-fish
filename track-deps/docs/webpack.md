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

## 3 依赖图 & ESM
1. compilation 对象就是依赖图
2. buildMeta.providedExports: FlagDependencyExportsPlugin
3. buildMeta.usedExports: FlagDependencyUsagePlugin

// todo