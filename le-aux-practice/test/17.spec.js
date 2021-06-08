const Tree = require('../../utils/Tree');
const {
  constructMaximumBinaryTree,
  _findArrayRangeMaxIndex,
} = require('../17-binaryTree(2)');

describe('binary tree 2', () => {
  it('_findArrayRangeMaxIndex', () => {
    const arr = [1, 2, 3, 4, 3, 2, 1];
    expect(_findArrayRangeMaxIndex(arr, 0, 7))
      .toEqual(3);

    expect(_findArrayRangeMaxIndex(arr, 2, 5))
      .toEqual(3);

    expect(_findArrayRangeMaxIndex(arr, 4, 7))
      .toEqual(4);
  });

  it('constructMaximumBinaryTree', () => {
    /* ([3,2,1,6,0,5]) => Tree[6,3,5,2,0,1] */
    const inputNums = [3, 2, 1, 6, 0, 5];
    const expectNums = [6, 3, 5, 2, 0, 1];
    const tree = new Tree([]);
    const _tree = constructMaximumBinaryTree(inputNums);
    tree.root = _tree;
    expect(tree.traversal()).toEqual(expectNums);
  });
});
