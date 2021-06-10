const Tree = require('../Tree');

describe('Tree', () => {
  it('init', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const tree = new Tree(arr);
    expect(tree.traversal()).toEqual(arr);

    const arr2 = [11, 2, 33, 4, 55, 6, 77, 8, 99, 10, 11, 12, 13, 14, 15];
    const tree2 = new Tree(arr2);
    expect(tree2.traversal()).toEqual(arr2);
  });

  it('init recursive', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const tree = new Tree(arr, true);
    expect(tree.traversal()).toEqual(arr);

    const arr2 = [11, 2, 33, 4, 55, 6, 77, 8, 99, 10, 11, 12, 13, 14, 15];
    const tree2 = new Tree(arr2, true);
    expect(tree2.traversal()).toEqual(arr2);
  });

  it('兼容非完全二叉树 (注意：不兼容递归生成，因为依靠序号)', () => {
    const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
    const rst = [1, 2, 3, 4, 5, 6, 7];
    const tree = new Tree(arr);
    expect(tree.traversal()).toEqual(rst);

    const arr2 = [1, null, 2, 3, 4, 5, null, 6, 7, null, null, null, 8];
    const rst2 = [1, 2, 3, 4, 5, 6, 7, 8];
    const tree2 = new Tree(arr2);
    expect(tree2.traversal()).toEqual(rst2);

    const arr3 = [1, 2, 3, null, 4, 5, null, null, 6, null, 7];
    const rst3 = [1, 2, 3, 4, 5, 6, 7];
    const tree3 = new Tree(arr3);
    expect(tree3.traversal()).toEqual(rst3);
  });
});
