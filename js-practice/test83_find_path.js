function findPath(obj, value) {
  const path = [];

  traversal(obj, value, path);

  return path.reverse();
}

function traversal(obj, value, path) {
  if (!obj) return false;

  if (typeof obj !== 'object') return obj === value;

  for (const key in obj) {
    const isMatch = traversal(obj[key], value, path);
    if (isMatch) {
      path.push(key);
      return true;
    }
  }

  return false;
}

// ============= test =============
const obj = {
  a: {
      a_1: {
          a_1_1: 'abc',
          a_1_2: 'efg'
      }
  },
  b: {
      b_1: 'xyz',
      b_2: '111'
  },
  c: '000'
}

console.log(
  findPath(obj, 'xyz'), // ['b', 'b_1']
  findPath(obj, 'efg'), // ['a', 'a_1', 'a_1_2']
  findPath(obj, '000'), // ['c']
);