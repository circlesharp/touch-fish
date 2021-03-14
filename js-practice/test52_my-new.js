function create(Constructor, ...args) {
  const obj = {};
  obj.__proto__ = Constructor.prototype;
  const result = Constructor.apply(obj, args);
  return typeof result === 'object' ? result : obj;
}

function A(value) {
  this.value = value;
  this.name = 'A a';
}

A.prototype.show = function () {
  console.log(this.value, this.name);
};

let a = create(A, 12);
a.show();
