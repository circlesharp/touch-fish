/**
 * @description 在网页中使用 es6 模块
 * @attention 模块标识符不要省略拓展名
 */

const rootEle = document.querySelector('#root');
import('./module.js').then((mod) => {
  rootEle.innerText = mod.default();
});
