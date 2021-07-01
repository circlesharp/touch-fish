const { solutionRecursive, solutionDP } = require('../26-dp(4)');

test('method 1: solutionRecursive', () => {
  const rst = [0, 1, 2, 3, 4, 5, 6, 9]
  for (let i = 0; i <= 7; i++) {
    expect(solutionRecursive(i)).toEqual(rst[i]);
  }
});

test('method 2: solutionDP', () => {
  const rst = [0, 1, 2, 3, 4, 5, 6, 9]
  for (let i = 0; i <= 7; i++) {
    expect(solutionDP(i)).toEqual(rst[i]);
  }
});

test('double check', () => {
  for (let i = 0; i < 20; i++) {
    expect(solutionDP(i)).toEqual(solutionRecursive(i));
  }
})
