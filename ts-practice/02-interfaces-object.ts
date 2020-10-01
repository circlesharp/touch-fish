/* type checking focuses on the shape that values have. */
/* This is sometimes called "duck typing" or "structural subtyping" */

/* first case */
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
const myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

/* second case interface */
interface LabeledValue {
  label: string;
}
function printLabel02(labelObj: LabeledValue) {
  console.log(labelObj.label);
}
printLabel02(myObj);

/* Optional Properties */
interface SquareConfig {
  color?: string;
  width?: number;
}
interface SquareResult {
  color: string;
  area: number;
}
function createSquare(config: SquareConfig): SquareResult {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) newSquare.color = config.color;
  if (config.width) newSquare.area = config.width ** 2;
  return newSquare;
}

/* Readonly properties: some properties should only be modifiable when an object is first created */
/* Variables use const whereas properties use readonly */
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 1, y: 2 };

/* ReadonlyArray<T> Array<T> */
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
a = ro as number[];


/*
:::Excess Property Checks:::

Object literals get special treatment and undergo excess property checking
when assigning them to other variables, or passing them as arguments.
If an object literal has any properties that the "target type" doesn't have, you'll get an error.
*/
function createSquare2(config: SquareConfig): {color: string; area: number} {
  return {
    color: config.color || 'red',
    area: config.width ? config.width ** 2 : 20,
  };
}
/* solution 01 */
let mySquare = createSquare2({ opacity: 0.5, width: 100 } as SquareConfig );
/*
solution 02
add a string index signature

this interface can have any number of properties, and as long as they aren't
color or width, their types don't matter.

It will fail if the variable does not have any common object property.
*/
interface SquareConfig3 {
  color?: string;
  width?: number;
  [propName: string]: any;
}
function createSquare3(config: SquareConfig3): {color: string; area: number} {
  return {
    color: config.color || 'red',
    area: config.width ? config.width ** 2 : 20,
  };
}
const squareOptions = { colour: 'red' };
const mySquare2 = createSquare2(squareOptions as SquareConfig);
const mySquare3 = createSquare3(squareOptions); // 为啥不报错呢？
