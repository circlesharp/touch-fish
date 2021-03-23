/* Extending Interfaces */

interface Shape {
  color: string;
}
interface PenShroke {
  penWidth: number;
}
interface Square extends Shape, PenShroke {
  sideLength: number;
}

let square = {} as Square; /* as 不要求这个对象一定要具有接口的指定的属性 */
square.color = 'red';
square.sideLength = 10;

console.log(square);


/*
Hybrid Types

an object that works as a combination of some of the types
*/

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  const counter = function(s: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

const c = getCounter();


/*
:::Interfaces Extending Classes:::

When an interface type extends a class type, it inherits
the members of the class but not their implementations.
*/

class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}
// class ImageControl implements SelectableControl {
//   /* The ImageControl class has it's own state private member rather than extending Control. */
//   private state: any;
//   select() {}
// }
