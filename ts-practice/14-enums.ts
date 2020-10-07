/*
::: Enums :::

Enums allow a developer to define a set of named constants.

TS provides both numeric and string-based enums.
*/


/* ::: Numeric enums ::: */

enum Direction {
  Up = 1, // 0 by default
  Down,
  Left,
  Right,
}

function test(direction: Direction): void {}
test(Direction.Up);


/*
::: String enums :::

In a string enums, each member has to be constant-initialized
with a string literal, or with another string enum member.

Don't have auto-incrementing behavior
*/

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}


/*
::: Heterogeneous enums :::

enums can be mixed with string and numeric members.
*/

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}


/* ::: Computed and constant members :::*/

enum A {
  x // E.x is constant
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1, // 左移
  Write = 2 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length,
}


/*
::: Union enums and enum member types :::

When all members in an enum have literal enum values:
1. enum members also become types as well;
2. enum types themselves effectively become a union of each enum member.
*/

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
}

function f(x: ShapeKind) {
  // if (x !== ShapeKind.Circle || x !== ShapeKind.Square) {} // fuck!
}


/*
::: Enums at runtime :::

Enums are real objects that exist at runtime.
*/

enum alphabet {
  a,
  b,
  c,
}
function fun(obj) {
  return obj
}
fun(alphabet); // { '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 }


/*
::: Enums at compile time :::

Use keyof typeof to get a Type that represents all Enums keys as strings.
*/

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

// type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num: number = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}

// printImportant(LogLevel.WARN, 'e')
printImportant('ERROR', 'error message example.'); // 很牛逼，请注意使用上的区别


/*
::: Reverse mappings :::

an enum is compiled into an object that stores both
forward (name -> value) and reverse (value -> name) mappings.

string enum members do not get a reverse mapping generated at all.
*/


/*
::: const enums :::

using the const modifier on our enums.
they are completely removed during compilation.
*/

const enum ConstDirection {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  ConstDirection.Up,
  ConstDirection.Down,
];


/*
::: Ambient enums :::

In regular enums, members that
don't have an initializer will be considered constant
if its preceding enum member is considered constant.

In contrast, an ambient(and non-const) enum member that
does not have initializer is always considered computed.
*/

declare enum Enum {
  A = 1,
  B,
  C = 2
}
