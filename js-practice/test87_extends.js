function SuperType() {
  this.superName = 'super type';
}

SuperType.prototype.getSuperName = function() {
  return this.superName;
};

// 原型链
(function() {
  function SubType() {
    this.subName = 'sub type';
  }

  SubType.prototype = new SuperType();
  SubType.prototype.getSubName = function() {
    return this.subName;
  };
})();

// 借用构造函数
(function() {
  function SubType() {
    SuperType.call(this)
  }
})()

// 组合继承
(function() {
  function SubType() {
    SuperType.call(this)
  }

  SubType.prototype = new SuperType();
  SubType.constructor = SubType;
  SubType.prototype.getSubName = function() {
    return this.subName;
  };
})()

// 原型式继承
(function() {
  function myCreate(instance) {
    function F() {}
    F.prototype = instance;
    return new F();
  }
})()

// 寄生式继承
(function() {
  function constructor(instance) {
    const clone = Object.create(instance);
    clone.sayHi = function() {};
    return clone;
  }
})()

// 寄生组合式继承
(function() {
  function SubType() {
    SuperType.call(this)
  }

  SubType.prototype = Object.create(SuperType.prototype);
  SubType.constructor = SubType;
  SubType.prototype.getSubName = function() {
    return this.subName;
  };
})()