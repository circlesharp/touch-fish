const deepClone = target => {
  let result;
  if (typeof target !== 'object') return target;
  if (Array.isArray(target)) {
    result = [];
    for (let i in target) {
      result.push(deepClone(target[i]));
    }
  } else if (target === null) {
    result = target;
  } else if (target.constructor === RegExp) {
    result = target;
  } else {
    result = {};
    for (let i in target) {
      result[i] = deepClone(target[i]);
    }
  }
  return result;
};

const test = [1, 2, 3, {a: 1, b: 3, c: ()=> {}, d: { e: 5 }}, 4];
const cloneTest = deepClone(test);
test[3].d.e = 55;
console.log(
  test, cloneTest
)
