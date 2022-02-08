// 闭包的定义: 函数对象与作用域组合起来解析函数变量的机制
// 为了实现词法作用域, js 函数对象的内部状态不仅要包括函数代码, 还要包括对函数定义的所在的作用域的引用
// 严格来说, 所有的 js 函数都是闭包
const counter = (function () {
  let cnt = 0;
  return {
    count() {
      return ++cnt;
    },
    reset() {
      cnt = 0;
    },
  };
})();

class Counter {
  constructor() {
    this.cnt = 0;
  }

  count() {
    return ++this.cnt;
  }

  reset() {
    this.cnt = 0;
  }
}

function test(counter) {
  console.log(counter.count());
  console.log(counter.count());
  counter.reset();
  console.log(counter.count());
  console.log(counter.count());
}

test(counter);
test(new Counter());
