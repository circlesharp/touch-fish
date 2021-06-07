const Tree = require('../../utils/Tree');
const { invertTree } = require('../16-binaryTree(1)');

describe('binary tree', () => {
  it('invertTree', () => {
    const arr = [4, 2, 7, 1, 3, 6, 9];
    const rst = [4, 7, 2, 9, 6, 3, 1];
    const tree = new Tree(arr);
    invertTree(tree.root);
    expect(tree.traversal()).toEqual(rst);
  });
});
