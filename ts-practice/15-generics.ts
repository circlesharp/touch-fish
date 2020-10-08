/*
::: Generics :::

Generics is able to create a component
that can work over a variety fo types rather than a single one.

This allows users to consume these components
and use their own type.
*/


/*
::: Hello World of Generics :::

We need a way to capturing the type of the argument
in such a way that we can also use it to denote what is being returned.

Here, we will use a type variable, a special kind of variable that
works on types rather than values.
*/

const identity: <T>(arg: T) => T = function identity<T>(arg: T): T{
  return arg;
}

/* pass all of the arguments, including the type argument */
let output = identity<string>('myString');

/* type argument inference: the compiler sets the value of T for us automatically */
let output2 = identity('a string');


/*
::: Working with Generic Type Variables :::
*/

function loggingIdentity<T>(arg: T[]): T[] { // T[] === Array<T>
  console.log(arg.length);
  return arg;
}


/*
::: Generic Types :::

generic interface
*/

interface GenericIdentityFn {
  <T>(arg: T): T;
}
interface GenericIdentityFn2<T> {
  (arg: T): T;
}
const identity2: GenericIdentityFn = identity;
const identity3: GenericIdentityFn2<number> = identity; // non-generic function, lock


/*
::: Generic Classes :::

Generic classes are only generic over their instance side
rather than their static side.
Static members can not use the class's type parameter.
*/

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

const myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = '';
myGenericString.add = (x, y) => x + y;


/*
::: Generic Constraints :::

We'll create an interface that describes our constraint.
Then, we'll use this interface and the extends keyword to denote our constraint.
*/

interface Lengthwise {
  length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// loggingIdentity2(2); // invalid
loggingIdentity2([]);
loggingIdentity2({ value: 3, length: 1 });


/*
::: Using Type Parameters in Generic Constraints :::

You can declare a type parameter that is constrained by another type parameter.
*/

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// getProperty(x, "m"); // invalid


/*
::: Using Class Types in Generics :::

When creating factories in TS using generics,
it is necessary to refer to class types
by their constructor functions.
*/

function create<T>(c: { new (): T }): T {
  return new c();
}
