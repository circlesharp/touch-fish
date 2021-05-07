const { getLinkList, arraifyLinkList } = require('../../utils/LinkList');
const { reverse } = require('../01-递归翻转链表');

it('递归翻转链表', () => {
  const arr = [1, 2, 3, 4]
  const linkList = getLinkList(arr);
  const revLinkList = reverse(linkList);
  expect(arraifyLinkList(revLinkList))
    .toEqual(Array.from(arr).reverse());
});
