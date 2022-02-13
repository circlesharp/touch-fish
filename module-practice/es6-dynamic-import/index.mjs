/**
 * @description es6 模块的动态导入
 * @conclusion import() 返回的是一个期约对象. 动态导入后, 这个期约会兑现
 * @attention 如果模块使用了 `export default`, 导入后要通过 ['default'] 访问
 */

setTimeout(() => {
  // 注意这个 default
  import(`./${'module'}.mjs`).then((mod) => mod.default());
}, 1000);
