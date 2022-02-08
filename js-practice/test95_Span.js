const Range = require('./test94_Range.js');

function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.from = start + span;
    this.to = start;
  }
}

// 子类关键在于, 实例继承 Span.prototype, 而它又继承 Range.prototype
// 而且要记得设置自有属性 constructor
Span.prototype = Object.assign(Object.create(Range.prototype), Span.prototype, {
  toString() {
    return `(${this.from}...${this.to - this.from})`;
  },
});
const span = new Span(1, 9);
console.log('span: ' + span, [...span]);

// 如果要继承静态属性的话
Span.__proto__ = Range;
Span.sayHi();

// es5 继承的小缺陷
console.log(Range.prototype.isPrototypeOf(Span.prototype)); // true
console.log(Range.isPrototypeOf(Span)); // false, es5 无法做到

class A {}
class B extends A {}

console.log(A.prototype.isPrototypeOf(B.prototype)); // true
console.log(A.isPrototypeOf(B)); // true(B.__proto__ === A), es6 做到了, 能够继承静态方法
