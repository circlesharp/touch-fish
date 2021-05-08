const { getLinkList, arraifyLinkList } = require('../../utils/LinkList');
const { reverse, reverseBetween, reverseKGroup } = require('../02-reverseKGroup');

describe('翻转链表', () => {
  it('递归翻转整个链表', () => {
    const arr = [1, 2, 3, 4]
    const linkList = getLinkList(arr);
    const revLinkList = reverse(linkList);

    expect(arraifyLinkList(revLinkList))
      .toEqual(Array.from(arr).reverse());
  });
  it('递归翻转链表区间', () => {
    const arr = [1, 2, 3, 4, 5]
    const linkList = getLinkList(arr);
    const revLinkList = reverseBetween(linkList, linkList.next.next.next);

    expect(arraifyLinkList(revLinkList))
      .toEqual([3, 2, 1, 4, 5]);

    const linkList_2 = getLinkList(arr);
    const revLinkList_2 = reverseBetween(linkList_2.next, linkList_2.next.next.next.next);
    expect(arraifyLinkList(revLinkList_2))
      .toEqual([4, 3, 2, 5]);
  });
  it('k 个一组反转链表', () => {
    const arr = [1, 2, 3, 4, 5]
    const linkList = getLinkList(arr);
    const revLinkList2Group = reverseKGroup(linkList, 2);

    expect(arraifyLinkList(revLinkList2Group))
      .toEqual([2, 1, 4, 3, 5]);

    const arr_2 = [1, 2, 3, 4, 5, 6]
    const linkList_2 = getLinkList(arr_2);
    const revLinkList3Group = reverseKGroup(linkList_2, 3);

    expect(arraifyLinkList(revLinkList3Group))
      .toEqual([3, 2, 1, 6, 5, 4]);
  })
});
