const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3 in object', () => {
  const obj = { a: 1, b: 2 };
  obj.c = sum(obj.a, obj.b)
  expect(obj).toEqual({ a: 1, b: 2, c: 3 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
