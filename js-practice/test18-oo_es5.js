function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.showName = function() {
  console.log(this.name);
}

const user = new User('tom', 12);
user.showName = function() {
  console.log(`I'm ${this.name}.`);
}

user.showName();


/* 继承 */

function VipUser(name, age, level) {
  User.call(this, name, age); // 通过 call 继承属性
  this.level = level;
}
VipUser.prototype = new User(); // 通过 prototype 继承方法
VipUser.prototype.constructor = VipUser; // constructor 指向自己
VipUser.prototype.showLevel = function() {
  console.log(this.level);
}

let vip = new VipUser('Rose', 20, 1);
vip.showName();
vip.showLevel();

console.log(vip.constructor); // VipUser.prototype.constructor
