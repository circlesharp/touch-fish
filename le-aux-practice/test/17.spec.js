const Tree = require('../../utils/Tree');
const {
  _findArrayRangeMaxIndex,
  constructMaximumBinaryTree,
  buildPreIn,
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

  it('buildPreIn', () => {
    /* pre=[3,9,20,15,7], in=[9,3,15,20,7] => Tree[3,9,20,15,7] */
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    const rst = [3, 9, 20, 15, 7];
    const tree = new Tree([]);
    console.log(tree);
    const _tree = buildPreIn(preorder, inorder);
    tree.root = _tree;
    // expect(tree.traversal()).toEqual(rst);
  })
});
