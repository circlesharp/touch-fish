function Person(name) {
  if (!(this instanceof Person)) throw Error('error');
  this.name = name;
}
Person.prototype.sayHi = function() {console.log('I am:', this.name);}

function Student(name, grade) {
  // super
  Person.call(this, name);
  this.grade = grade;
}
// 修改原型, 拷贝过的原型的 __proto__ 是这个 Person.prototype
Student.prototype = Object.create(Person.prototype);
// 修改原型链 - constructor
Student.prototype.constructor = Student;
Student.prototype.getGrade = function() {console.log('I am in grade:', this.grade);}


// ============== test ==============
const p = new Person('John');
p.sayHi();

const s = new Student('Tom', 5);
s.sayHi()
s.getGrade();

// ============== test ==============
console.log(
  s instanceof Student,
  s instanceof Person,
  s instanceof Object,
);