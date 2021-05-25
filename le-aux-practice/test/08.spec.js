const {
  removeDuplicates,
  removeDuplicatesOfLinkList,
  removeDuplicatesOfLinkList_2,
  removeElement,
  moveZeroes,
  moveZeroes_2,
} = require('../08-inplaceOperate');
const { getLinkList, arraifyLinkList } = require('../../utils/LinkList');

describe('双指针原地操作数组', () => {
  it('有序数组去重', () => {
    /* ([1,1,2]) => 2 (1,2) */
    const arr_1 = [1, 1, 2];
    const rst_1 = removeDuplicates(arr_1);
    expect(rst_1).toEqual(2);
    expect(arr_1.slice(0, rst_1)).toEqual([1, 2]);

    /* ([0,0,1,1,1,2,2,3,3,4]) => 5 (0,1,2,3,4) */
    const arr_2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const rst_2 = removeDuplicates(arr_2);
    expect(rst_2).toEqual(5);
    expect(arr_2.slice(0, rst_2)).toEqual([0, 1, 2, 3, 4]);
  });

  it('有序数组去重 - 链表', () => {
    /* ([1,1,2]) => 2 (1,2) */
    const arr_1 = [1, 1, 2];
    const link_1 = getLinkList(arr_1);
    removeDuplicatesOfLinkList(link_1);
    expect(arraifyLinkList(link_1)).toEqual([1, 2]);

    /* ([0,0,1,1,1,2,2,3,3,4]) => 5 (0,1,2,3,4) */
    const arr_2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const link_2 = getLinkList(arr_2);
    removeDuplicatesOfLinkList(link_2);
    expect(arraifyLinkList(link_2)).toEqual([0, 1, 2, 3, 4]);
  });

  it('有序数组去重 - 链表 - 参考答案', () => {
    /* ([1,1,2]) => 2 (1,2) */
    const arr_1 = [1, 1, 2];
    const link_1 = getLinkList(arr_1);
    removeDuplicatesOfLinkList_2(link_1);
    expect(arraifyLinkList(link_1)).toEqual([1, 2]);

    /* ([0,0,1,1,1,2,2,3,3,4]) => 5 (0,1,2,3,4) */
    const arr_2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const link_2 = getLinkList(arr_2);
    removeDuplicatesOfLinkList_2(link_2);
    expect(arraifyLinkList(link_2)).toEqual([0, 1, 2, 3, 4]);
  });

  it('移除元素', () => {
    /* ([3,2,2,3], 3) => 2 [2,2,...] */
    let arr_1 = [3, 2, 2, 3];
    const rst_1 = removeElement(arr_1, 3);
    expect(rst_1).toEqual(2);
    expect(arr_1.slice(0, rst_1)).toEqual([2, 2]);

    /* ([0,1,2,2,3,0,4,2], 2) => 5 [0,1,3,0,4] */
    let arr_2 = [0, 1, 2, 2, 3, 0, 4, 2];
    const rst_2 = removeElement(arr_2, 2);
    expect(rst_2).toEqual(5);
    expect(arr_2.slice(0, rst_2)).toEqual([0, 1, 3, 0, 4]);
  });

  it('移动零到最后', () => {
    /* ([0,1,4,0,2]) => [1,4,2,0,0] */
    const arr = [0, 1, 4, 0, 2];
    moveZeroes(arr);
    expect(arr).toEqual([1, 4, 2, 0, 0]);
  });
  it('移动零到最后 - 参考答案', () => {
    /* ([0,1,4,0,2]) => [1,4,2,0,0] */
    const arr = [0, 1, 4, 0, 2];
    moveZeroes_2(arr);
    expect(arr).toEqual([1, 4, 2, 0, 0]);
  });
});
