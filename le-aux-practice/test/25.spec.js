const {
  KMP
} = require('../25-dp(3)');

test('KMP', () => {
  const kmp = new KMP('ababc');

  expect(kmp.search('aaacababc')).toEqual(4);
  expect(kmp.search('aaacaaac')).toEqual(-1);
});
