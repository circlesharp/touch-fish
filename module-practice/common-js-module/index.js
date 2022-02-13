/**
 * @description 验证 common.js 规范下重复导入的时候脚本是否会重复执行
 * @conclusion 没有重复执行模块, 在首次导入时只运行一次
 */

const number = require('./number');
const string = require('./string');
const add = require('./add');

require('./number').add(1, 2);
