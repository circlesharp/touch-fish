const Tree = require('../Tree');

describe('Tree', () => {
  it('init', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const tree = new Tree(arr);
    expect(tree.traversal()).toEqual(arr);

    const arr2 = [11, 2, 33, 4, 55, 6, 77, 8, 99, 10, 11, 12, 13, 14, 15]
    const tree2 = new Tree(arr2);
    expect(tree2.traversal()).toEqual(arr2);
  });
});
