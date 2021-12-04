function create(Constructor, ...args) {
  const obj = {}; // 创建一个对象
  obj.__proto__ = Constructor.prototype; // 链接到构造函数的原型
  const privateObj = Constructor.apply(obj, args); // 绑定 this
  return typeof privateObj === 'object' ? privateObj : obj; // 返回这个对象
}

function A() {
  this.a = 1;
}

function B(b) {
  this.b = b;
}

function C() {
  // console.log(233);
}

function D(d) {
  this.d = d;
  return {
    getD: () => this.d,
  };
}

[A, B, C, D].forEach((Con) => {
  console.log(create(Con, 2));
});
