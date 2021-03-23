/* Function Types */

interface SearchFunc {
  (source: String, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub): boolean {
  let result = src.search(sub);
  return result > -1;
}

/*
:::Indexable Types:::

There are two types of supported index signatures: string and number.
The type returned from a numeric indexer must be a subtype of the type returned from the string indexer.
All properties match string index type. ([index: string] the basic)
*/
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];

interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
// interface NotOkay {
//   [x: number]: Animal; // cuz arr[1] === arr['1']
//   [y: string]: Dog;
// }
// interface NumberDictionary {
//   [index: string]: number;
//   length: number;
//   name: string; // error, the type of 'name' must be a subtype of the indexer.
// }

/* readonly */
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
const myArray2: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray2[2] = 'Tom'; // readonly
