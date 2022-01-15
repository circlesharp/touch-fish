function Person(name) {
  if (!(this instanceof Person)) throw Error('error');
  this.name = name
}

function myNew(Constructor, ...args) {
  const instance = {};
  instance.__proto__ = Constructor.prototype;
  const rtInstance = Constructor.apply(instance, args);
  return rtInstance || instance;
}

// Person("Hello") // error
// new Person("Hello") // ok
let i = myNew(Person, '2333');
console.log(i.name);
