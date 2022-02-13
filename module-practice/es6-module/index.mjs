/**
 * @description 验证 es6 规范下重复导入的时候脚本是否会重复执行
 * @conclusion 没有重复执行模块, 在首次导入时只运行一次
 * @attention node 对 es6 模块的支持依赖文件拓展名 .mjs
 */

import * as number from './number.mjs';
import * as string from './string.mjs';
import * as add from './add.mjs';
