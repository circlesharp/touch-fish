function myInstanceOf(left, right) {
  let proto = left.__proto__;
  while(proto) {
    if (proto === right.prototype) return true;
    proto = proto.__proto__;
  }
  return false;
}


function Foo () {}
var f = new Foo()

console.log(myInstanceOf(f, Foo), f instanceof Foo); // true
console.log(myInstanceOf(f, Object), f instanceof Object); // true
console.log(myInstanceOf([1,2], Array), [1,2] instanceof Array); // true
console.log(myInstanceOf({ a: 1 }, Array), { a: 1 } instanceof Array); // false