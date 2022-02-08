class ES6 {
  a = 1;
  b() {}
}

function ES5() {
  this.a = 1;
}
ES5.prototype.b = function () {};

// ['b']
console.log(Object.keys(ES5.prototype));
// []
console.log(Object.keys(ES6.prototype));
// [ 'constructor', 'b' ]
console.log(Object.getOwnPropertyNames(ES5.prototype));
// [ 'constructor', 'b' ]
console.log(Object.getOwnPropertyNames(ES6.prototype));
