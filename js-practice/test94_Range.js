function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.sayHi = function () {
  console.log(233);
};

// 这里不要重写了 prototype 对象(每一个函数都有), 默认每个函数的 prototype 都有 constructor 这个不可枚举的属性
// 拓展预定义的 prototype 对象
Object.assign(Range.prototype, {
  includes(x) {
    return this.from <= x && this.to >= x;
  },
  toString() {
    return `(${this.from}...${this.to})`;
  },
  // 可迭代
  *[Symbol.iterator]() {
    for (let i = Math.floor(this.from); i <= this.to; i++) {
      yield i;
    }
  },
});

function _new(Con, ...args) {
  // new 的关键在于构造函数的 prototype 属性将被用作新对象的原型
  const obj = Object.create(Con.prototype);
  Range.apply(obj, args);
  return obj;
}

const range = _new(Range, 1, 10);
console.log('range: ' + range, [...range]);

module.exports = Range;
