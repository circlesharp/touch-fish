/* 构造函数有一个 prototype 属性，指向实例对象的原型对象 */
{
  function Foo() {};
  Foo.prototype.a = 1;
  
  const foo = new Foo();
  
  console.log(Foo.prototype.a);
  console.log(foo.a); // 实例本身没有 a 属性，它继承原型对象 Foo.prototype 的 a 属性
  console.log(foo.__proto__.a);
}

/* 原型对象有一个 constructor 属性，指向该原型对象对应的构造函数 */
{
  function Foo() {};
  const foo = new Foo();
  console.log('Foo.prototype.constructor === Foo:', Foo.prototype.constructor === Foo);
  console.log('foo.__proto__.constructor === Foo:', foo.__proto__.constructor === Foo);
  console.log('foo.constructor === Foo:', foo.constructor === Foo);
}

/* 实例对象有一个 proto 属性，指向该实例对象的原型对象 */
{
  function Foo() {};
  const foo = new Foo();
  console.log('foo.__proto__ === Foo.prototype:', foo.__proto__ === Foo.prototype);
}
