const {
  numTrees,
  generateTrees,
} = require('../22-bst(3)');

describe('bst 03', () => {
  it('numTrees', () => {
    expect(numTrees(1)).toEqual(1);
    expect(numTrees(2)).toEqual(2);
    expect(numTrees(3)).toEqual(5);
  });

  it('generateTrees', () => {
    expect(generateTrees(1).length).toEqual(1);
    expect(generateTrees(2).length).toEqual(2);
    expect(generateTrees(3).length).toEqual(5);
  })
});
