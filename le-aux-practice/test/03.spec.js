const { getLinkList, arraifyLinkList } = require('../../utils/LinkList');
const { preTraversal, postTraversal, isPalindrome } = require('../03-isPalindrome');

describe('判断回文链表', () => {
  it('链表前序遍历', () => {
    const arr = [1, 2, 3, 4];
    const rst = [];
    const linkList = getLinkList(arr);
    preTraversal(linkList, node => { rst.push(node.data) })

    expect(rst)
      .toEqual(arr);
  });

  it('链表后序遍历', () => {
    const arr = [1, 2, 3, 4];
    const rst = [];
    const linkList = getLinkList(arr);
    postTraversal(linkList, node => { rst.push(node.data) })

    expect(rst)
      .toEqual(arr.reverse());
  });

  it('判断回文链表（空间复杂度 O(n)）', () => {
    const arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const arr2 = [1, 2, 3, 4, 4, 3, 2, 1];
    const arr3 = [1, 2, 3, 4, 5, 3, 2, 1];

    const ll1 = getLinkList(arr1);
    const ll2 = getLinkList(arr2);
    const ll3 = getLinkList(arr3);

    expect(isPalindrome(ll1)).toEqual(true);
    expect(isPalindrome(ll2)).toEqual(true);
    expect(isPalindrome(ll3)).toEqual(false);
  });
})

