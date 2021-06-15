const Tree = require('../../utils/Tree');
const { findKthSmallest } = require('../19-bst(1)');

describe('bst 01', () => {
  it('findKthSmallest', () => {
    const arr = [5, 3, 6, 2, 4, null, null, 1];
    const tree = new Tree(arr);
    expect(findKthSmallest(tree.root, 3)).toEqual(3);
  })
})
