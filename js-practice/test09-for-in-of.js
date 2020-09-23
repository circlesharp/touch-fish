const testArr = [1, 2, 3, {a: 1, b: 2}];
const testObj = {a: 1, b: 2, c: [1, 2, 3], d: {a: 1, b: 2}};

const forIn = target => {
  for (const i in target) {
    console.log(i);
  }
};

const forOf = target => {
  for (const i of target) {
    console.log(i);
  }
};

const test = target => {
  console.log(
    Object.keys(target)
  )
}

// forIn(testArr);
// forOf(testArr);
// forIn(testObj);
// forOf(testObj);

test(testArr);
test(testObj);
