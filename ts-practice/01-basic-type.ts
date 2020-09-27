/* Boolean */
let isDone: boolean = false;

/* Number */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/* String */
let color: string = 'blue';
let sententce: string = `Hello, ${color}`;

/* Array */
let list: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];

/* Tuple */
let x: [string, number] = ['str', 1];
// let y: [string, number] = [1, 'str'];
// x[2] = 'x';

/* Enum */
enum Color {
  Red,
  Green = 3,
  Blue,
}
let c: Color = Color.Red;
let colorName: string = Color[4]; // Tips: 对对象的属性赋值会返回改值

/* Unknown */
let notSure: unknown = 4;
notSure = 'Maybe a string instead';
notSure = false;

declare const maybe: unknown;
// const aNumber: number = maybe;
if (maybe === true) {
  // const aBoolean: boolean = maybe;
  // const aString: string = maybe;
}
if (typeof maybe === 'string') {
  const aString: string = maybe;
}

/* Any */
declare function getValue(key: string): any;
const str: string = getValue('myString');

let looselyTyped: any = 4;
looselyTyped.a;
looselyTyped.b();
let d = looselyTyped.a.b.c.d;

/* Void: the opposite of Any, the absence of having any type at all. */
function warnUser(): void {
  console.log('warn');
  return;
}

/* Null and Undefined */
/* use --strictNullChecks when possible */
let u: undefined = undefined;
let n: null = null;
let t: number = null; // Tips: By default null and undefined are subtypes of all other types.

/* Never */
/* represent that the type of values that never occur */
function error(message: string): never {
  throw new Error(`fuck you, ${message}.`);
}
function fail() {
  return error('John');
}

/* Object */
declare function create(o: object | null): void;
create({});
create(null);

/* Type Assertions */
let someValue: unknown = 'this is a string.';
let strLength1: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

function reverse(s:string): string {
  return s.split('').reverse().join('');
}

console.log(reverse('hello world'));
