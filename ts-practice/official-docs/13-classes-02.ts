/*
::: Accessors :::

TS supports getters/setters as a way of intercepting accesses to a member of an object.

Accessors with a get and no set are automatically inferred to be readonly.
*/

const fullNameMaxLength = 10;
// class Employee {
//   private _fullName: string = '';
//   get fullName(): string{
//     return this._fullName;
//   }
//   set fullName(newName: string) {
//     if (newName && newName.length > fullNameMaxLength) {
//       throw new Error(`fullName has a max length of  ${fullNameMaxLength}`);
//     }
//     this._fullName = newName;
//   }
// }


/* ::: Static Properties ::: */

class Grid {
  static origin = { x: 0, y: 0 };
  constructor(public scale: number) {}
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist ** 2 + yDist ** 2) / this.scale;
  }
}

const grid = new Grid(1);
Grid.origin;
// grid.origin; // fuck!


/*
::: Abstract Classes :::

Abstract classes are base classes from which
other classes may be derived.

They may not be instantiated directly.

Abstract methods share a similar syntax to interface methods.
Both define the signature of a method without including a method body.
*/

abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing');
  }
  /* Must be implemented in derived classes. */
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

// const department = new Department // fuck!
const accDep: Department = new AccountingDepartment(); // as an abstract type
accDep.printMeeting();
accDep.printName();
// accDep.generateReports(); // fuck!


/*
::: Advanced Techniques :::

*/

class Greet {
  constructor(public greeting: string) {}
  static test = 'Hello';
  greet(): string {
    return `${Greet.test} ${this.greeting}`;
  }
}

/*
greetMaker will hold the class itself,
or said another way its constructor function.
(以及它的全部吧…… PS 构造函数真的是全部，看 js 编译结果就知道了)

use typeof Greet is "give me the type of the Greet class itself"
rather than the instance type.
Or, more precisely, "give me the type of the symbol called Greet",
which is the type of the constructor function.
*/
const greetMaker: typeof Greet = Greet;
greetMaker.test = 'Hi';

/*  Greet as the type of instances of the class Greet */
let greet1: Greet = new Greet('greet');
let greet2: Greet = new greetMaker('maker');
console.log(
  greet1.greet(),
  greet2.greet()
) // the same


/*
::: Using a class as an interface :::

A class declaration creates two things:
a type representing instances of the class
and a constructor function.
*/
class A {
  x: number;
  y: number;
}
interface B extends A {
  z: number;
}
let point3d: B = {
  x: 1,
  y: 1,
  z: 3,
};
