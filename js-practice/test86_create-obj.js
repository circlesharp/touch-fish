// 1 工厂模式
{
  function createPerson(name, age, job) {
    const o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
      console.log(this.name);
    }

    return o;
  }
}

// 构造函数模式
{
  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
      console.log(this.name);
    }
  }
}

// 组合使用构造函数模式和原型模式
{
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype = {
    constructor: Person,
    sayName() {
      console.log(this.name);
    }
  }
}

// 动态原型模式
{
  function Person(name, age) {
    this.name = name;
    this.age = age;

    if (typeof this.sayName !== 'function') {
      Person.prototype.sayName = function() {
        console.log(this.name);
      };
    }
  }
}

// 寄生构造函数模式
{
  function Person(name, age, job) {
    const o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
      console.log(this.name);
    }

    return o;
  }

  new Person();
}

// 稳妥构造函数模式
{
  function Person(name) {
    const obj = new Object();

    // 受保护的属性在此定义

    obj.getName = function() {
      return name;
    }

    return obj;
  }

  const person = Person();
}