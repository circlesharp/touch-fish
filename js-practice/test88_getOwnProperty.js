// test 1 实例化
(function () {
  class A {
    a1 = 1;
    a2 = 2;
  }

  class B extends A {
    b1 = 1;
    b2 = 2;
  }

  const b = new B();

  // [ 'a1', 'a2', 'b1', 'b2' ]
  console.log(Object.getOwnPropertyNames(b));
  // [ 'a1', 'a2', 'b1', 'b2' ]
  console.log(Object.keys(b));
});

// test 2 继承
(function () {
  const obj = Object.create({ a: 1 });
  obj.b = 2;

  // [ 'b' ]
  console.log(Object.getOwnPropertyNames(obj));
  // [ 'b' ]
  console.log(Object.keys(obj));
});

// test 3 枚举
(function () {
  const obj = Object.create({ a: 1 });
  obj.b = 2;
  Object.defineProperty(obj, 'b', {
    enumerable: false,
  });

  // [ 'b' ]
  console.log(Object.getOwnPropertyNames(obj));
  // [ ]
  console.log(Object.keys(obj));
});

// test 4 Symbol
(function () {
  const obj = Object.create({ a: 1 });
  obj[Symbol.for('b')] = 2;

  // [ Symbol(b) ]
  console.log(Object.getOwnPropertySymbols(obj));
  // [ ]
  console.log(Object.keys(obj));
});

// test 5 in
(function () {
  const obj = Object.create({ a: 1 });
  obj.b = 2;
  obj[Symbol.for('c')] = 3;

  // true, true, false
  console.log('a' in obj, 'b' in obj, Symbol.for('b') in obj);

  // b, a
  for (let k in obj) {
    console.log(k);
  }
});

// test 6 访问器属性的枚举
(function () {
  const obj = {
    get b() {
      return this.a;
    },
    set b(v) {
      this.a = v;
    },
  };
  Object.defineProperty(obj, 'c', {
    enumerable: false,
    get() {
      return this.a;
    },
    set(v) {
      this.a = v + 0.1;
    },
  });

  // [b,c]
  console.log(Object.getOwnPropertyNames(obj));
  // [b]
  console.log(Object.keys(obj));
})();
