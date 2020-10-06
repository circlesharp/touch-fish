/* ::: Classes ::: */

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

let greeter = new Greeter('world');


/*
::: Inheritance :::

extends
Derived Classes(Subclasses) inherit properties and methods from Base Class(Superclasses).
*/

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

const sam = new Snake('Sammy the Python');
const tom: Animal = new Horse('Tommy the Palomino');


/*
::: Public, Private, and Protected modifiers :::

Public by default
ES Private Fields
TS private
protected
*/

/*
::: Public by default :::

you may still mark a member public explicitly.
*/

class A {
  public name: string;
}

/* ::: ES Private Fields ::: */
/*
class B {
  #name: string;
}
new B().#name; // fuck! */

/*
::: TS private :::

For two types to be considered compatible,
if one of them has a private member, then the other must have
a private member that originated in the same declaration.
The same applies to protected members.
*/
class C {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
// new C('Cat').name; // fuck!

/*
::: protected :::

Members declared protected can also be accessed within deriving classes.
*/

class Person {
  protected name: string; // protected 子类可以访问，示例不能访问; private 子类都不能访问
  constructor(name: string) {
    this.name = name;
  }
}
class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
const howard = new Employee('Howard', 'Sales');

/*
A constructor may also be marked protected.
This means that the class cannot be instantiated outside of tis containing class,
bu can be extended.
*/

class D {
  protected constructor() {}
}
class E extends D {
  constructor() {
    super();
  }
}
new E();
// new D(); // fuck!


/*
::: Readonly modifier :::

Readonly properties must be initialized at their declaration or in the constructor.
*/

/*
::: Parameter properties :::

Parameter properties let you create and initialize a member in one place.
Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier.
*/

class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}
