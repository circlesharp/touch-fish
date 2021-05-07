const { getLinkList, arraifyLinkList } = require('../LinkList');

describe('LinkList', () => {
  const arr = [1, 2, 3, 4]
  const linkList = getLinkList(arr);
  it('getLinkList', () => {
    expect(linkList.data).toEqual(1);
    expect(linkList.next.data).toEqual(2);
    expect(linkList.next.next.data).toEqual(3);
    expect(linkList.next.next.next.data).toEqual(4);
    expect(linkList.next.next.next.next).toEqual(null);
  })
  it('arraifyLinkList', () => {
    expect(arraifyLinkList(linkList)).toEqual(arr);
  })
});
