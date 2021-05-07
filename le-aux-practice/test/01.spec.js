const { getLinkList, arraifyLinkList } = require('../../utils/LinkList');
const { reverse, reverseN, reverseBetween } = require('../01-reverseLinkList');

describe('翻转链表', () => {
  it('递归翻转整个链表', () => {
    const arr = [1, 2, 3, 4]
    const linkList = getLinkList(arr);
    const revLinkList = reverse(linkList);
    expect(arraifyLinkList(revLinkList))
      .toEqual(Array.from(arr).reverse());
  });

  it('递归翻转链表前N项', () => {
    const arr = [1, 2, 3, 4]
    const linkList = getLinkList(arr);
    const revLinkList = reverseN(linkList, 3);
    expect(arraifyLinkList(revLinkList))
      .toEqual([3, 2, 1, 4]);
  });

  it('翻转链表的一部分', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const linkList = getLinkList(arr);
    const revLinkList = reverseBetween(linkList, 2, 5);
    expect(arraifyLinkList(revLinkList))
      .toEqual([1, 5, 4, 3, 2, 6]);
  });
});
