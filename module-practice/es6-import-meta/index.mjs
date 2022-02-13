/**
 * @description es6 模块的特殊属性 import.meta
 * @conclusion import.meta 对象的 url 属性是加载模块时使用的 URL
 */

import { thisFileURL } from './module.mjs';

console.log(thisFileURL);
