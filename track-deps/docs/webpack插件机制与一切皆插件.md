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
![compiler.hooks](webpack_files/19.jpg)
![compilation.hooks](webpack_files/20.jpg)

官网例子
![run docs](webpack_files/23.jpg)
![run.call](webpack_files/21.jpg)
![run.tap](webpack_files/22.jpg)


## 2 一切皆插件: ppt & source code

注意, 新版的webpack 的关键对象已经不是 tapalbe 实例了
![古老的 webpack & tapable](webpack_files/24.jpg)
![古老的插件写法](webpack_files/25.jpg)

webpack 关键的 tapalbe 实例
其中的 compiler 是最主要的, 插件就是对 compiler 对象的一系列操作
1. compiler 核心分发器
2. compilation 依赖图
3. resolver 找资源
4. moduleFactories 生成模块对象
5. parser 生成AST
6. template 渲染

### compiler 核心分发器
![compiler: a node api, start / stop](webpack_files/26.jpg)

以 hooks.done 为例
![compiler hooks](webpack_files/3.jpg)
![hook.done call](webpack_files/4.jpg)
![hook.done tap](webpack_files/8.jpg)


// ! delete
compiler 上面有其他重要的 tapable 实例
``` js
// ResolverFactory line 146
this.resolverFactory = new ResolverFactory();

// NormalModuleFactory line 636~641
const normalModuleFactory = new NormalModuleFactory(/*xxx*/);
this.hooks.normalModuleFactory.call(normalModuleFactory);
```

### compilation
使用 依赖图遍历算法(dep graph traversal algo) 维护 moduleGraph

### resolver
以独立成一个 npm 包
![ResolverFactory resolver](webpack_files/27.jpg)
![github enhanced-resolve](webpack_files/29.jpg)

### moduleFactories
ModuleFactory 是一个抽象类, 有更具体的模块工厂, 比如 NormalModuleFactory
![NormalModuleFactory](webpack_files/5.jpg)

### parser
Parser 是一个抽象类, 具体的如 JavascriptParser
![JavascriptParser](webpack_files/6.jpg)
wepack 5 的 parser 聚焦于 parse AST, dep 是通过插件机制创建与收集的
![parser export.call](webpack_files/30.jpg)
![HarmonyModulesPlugin's tap create and collect](webpack_files/7.jpg)

### template
![remove ModuleTemplate](webpack_files/28.jpg)
![bundle](webpack_files/31.jpg)


