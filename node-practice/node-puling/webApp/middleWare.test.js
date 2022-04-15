const { UseMiddleWare } = require('./middleWare');

// =============== 中间件 ===============
function m1(src, next) {
  src.process += '_m1s_';
  next();
  src.process += '_m1e_';
}

function m2(src, next) {
  src.process += '_m2s_';
  next();
  src.process += '_m2e_';
}

function m3(src, next) {
  src.process += '_m3s_';
  next();
  src.process += '_m3e_';
}

// =============== 基本测试 ===============
const u1 = new UseMiddleWare();
const t1 = { process: 't1' };
u1.use(m1, m2, m3);
u1.handle(t1);

console.log(t1);

// =============== 多次调用 use 测试 ===============
const u2 = new UseMiddleWare();
const t2 = { process: 't2' };
u2.use(m1);
u2.use(m3, m2);
u2.handle(t2);

console.log(t2);
