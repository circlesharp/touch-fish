const { hasCycle, detectCycle, middleNode, findNthFromEnd, reverseArray } = require('../04-doublePointers');
const { getLinkList, arraifyLinkList } = require('../../utils/LinkList');

describe('双指针技巧 - 快慢指针', () => {
  it('判定链表中是否包含环', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const linkList = getLinkList(arr);
    expect(hasCycle(linkList)).toEqual(false);

    /* 制造环 */
    const node_3 = linkList.next.next;
    const node_7 = node_3.next.next.next.next;
    node_7.next = node_3;
    expect(hasCycle(linkList)).toEqual(true);
  });

  it('返回含环链表的环的起始位置', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const linkList = getLinkList(arr);
    const node_3 = linkList.next.next;
    const node_7 = node_3.next.next.next.next;
    node_7.next = node_3;

    expect(detectCycle(linkList)).toEqual(node_3);
  });

  it('寻找链表的中点', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const linkList = getLinkList(arr);
    expect(middleNode(linkList).data).toEqual(4);

    const arr2 = [1, 2, 3, 4, 5, 6];
    const linkList2 = getLinkList(arr2);
    expect(middleNode(linkList2).data).toEqual(4);
  });

  it('寻找链表的倒数第 n 个元素', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const linkList = getLinkList(arr);
    for (let i = 0; i < arr.length; i++) {
      expect(findNthFromEnd(linkList, i + 1).data).toEqual(arr[arr.length - i - 1]);
    }

    const arr2 = [1, 2, 3, 4, 5, 6, 7];
    const linkList2 = getLinkList(arr2);
    /* 删除倒数第3个结点 => 1 2 3 4 (5) 6 7 */
    const preNode = findNthFromEnd(linkList2, 3 + 1);
    preNode.next = preNode.next.next;
    expect(arraifyLinkList(linkList2)).toEqual([1, 2, 3, 4, 6, 7]);
  });
});

describe('双指针技巧 - 快慢指针', () => {
  it('反转数组', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(reverseArray(Array.from(arr))).toEqual(arr.reverse());
  });
});
