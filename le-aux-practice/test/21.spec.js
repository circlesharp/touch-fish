const Tree = require('../../utils/Tree');
const { isValidBST, isInBST, insertIntoBST, _getMinNode, deleteFromBST } = require('../21-bst(2)');

describe('bst 02', () => {
  it('isValidBST', () => {
    const bst1 = new Tree([10, 5, 15, null, null, 6, 20]);
    expect(isValidBST(bst1.root)).toEqual(false);

    const bst2 = new Tree([10, 5, 15, null, null, 11, 20]);
    expect(isValidBST(bst2.root)).toEqual(true);
  });

  it('isInBST', () => {
    const tree = new Tree([10, 5, 15, null, null, 11, 20]);
    const bst = tree.root;
    expect(isInBST(bst, 10)).toEqual(true);
    expect(isInBST(bst, 5)).toEqual(true);
    expect(isInBST(bst, 15)).toEqual(true);
    expect(isInBST(bst, 11)).toEqual(true);
    expect(isInBST(bst, 20)).toEqual(true);

    expect(isInBST(bst, 22)).toEqual(false);
    expect(isInBST(bst, 1)).toEqual(false);
    expect(isInBST(bst, 16)).toEqual(false);
  });

  it('insertIntoBST', () => {
    const tree = new Tree([10, 5, 15, null, null, 11, 20]);
    const bst = tree.root;

    insertIntoBST(bst, 1);
    insertIntoBST(bst, 2);
    insertIntoBST(bst, 3);
    insertIntoBST(bst, 4);
    insertIntoBST(bst, 6);
    insertIntoBST(bst, 7);
    insertIntoBST(bst, 8);
    insertIntoBST(bst, 9);
    insertIntoBST(bst, 12);
    insertIntoBST(bst, 17);
    expect(isValidBST(bst)).toEqual(true);

    expect(isInBST(bst, 1)).toEqual(true);
    expect(isInBST(bst, 3)).toEqual(true);
    expect(isInBST(bst, 5)).toEqual(true);
    expect(isInBST(bst, 7)).toEqual(true);
    expect(isInBST(bst, 9)).toEqual(true);
  });

  it('_getMinNode', () => {
    const tree = new Tree([10, 5, 15, null, null, 11, 20]);
    const bst = tree.root;

    expect(_getMinNode(bst).data).toEqual(5);
  });

  it('deleteFromBST', () => {
    const arr = [5, 2, 6, 1, 4, null, 7, null, null, 3];
    const bst = (new Tree(arr)).root;

    let bst1 = JSON.parse(JSON.stringify(bst));
    bst1 = deleteFromBST(bst1, 1);
    expect(isValidBST(bst1)).toEqual(true);

    let bst2 = JSON.parse(JSON.stringify(bst));
    bst2 = deleteFromBST(bst2, 2);
    expect(isValidBST(bst2)).toEqual(true);

    let bst3 = JSON.parse(JSON.stringify(bst));
    bst3 = deleteFromBST(bst3, 3);
    expect(isValidBST(bst3)).toEqual(true);

    let bst4 = JSON.parse(JSON.stringify(bst));
    bst4 = deleteFromBST(bst4, 4);
    expect(isValidBST(bst4)).toEqual(true);

    let bst5 = JSON.parse(JSON.stringify(bst));
    bst5 = deleteFromBST(bst5, 5);
    expect(isValidBST(bst5)).toEqual(true);

    let bst6 = JSON.parse(JSON.stringify(bst));
    bst6 = deleteFromBST(bst6, 6);
    expect(isValidBST(bst6)).toEqual(true);

    let bst7 = JSON.parse(JSON.stringify(bst));
    bst7 = deleteFromBST(bst7, 7);
    expect(isValidBST(bst7)).toEqual(true);
  });
});
