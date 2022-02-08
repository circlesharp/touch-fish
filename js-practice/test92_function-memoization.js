// 函数记忆: 函数能够缓存自己之前的计算结果
function memoize(fun) {
  const cache = new Map();

  return function (...args) {
    const key = `${args.length} ${args.join('+')}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    const rst = fun.apply(this, args);
    cache.set(key, rst);
    return rst;
  };
}

// test
// 注意, 在递归的时候, 是递归记忆版本, 而非原始版本
class Obj {
  constructor() {
    this.cnt = 0;
    this.fab = memoize(function (n) {
      this.cnt += 1;
      if (n < 3) return 1;
      return this.fab(n - 1) + this.fab(n - 2);
    });
  }
}

const obj = new Obj();
console.log(obj.fab(100), obj.cnt);
