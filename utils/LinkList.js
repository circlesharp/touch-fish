class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const getLinkList = (arr = []) => {
  arr = Array.from(arr);
  let head = null
  let tmpNode = null;
  let value = arr.pop();

  while (value != null) {
    tmpNode = new Node(value);
    tmpNode.next = head;
    head = tmpNode;
    value = arr.pop();
  }

  return head;
}

const arraifyLinkList = head => {
  const arr = [];

  while (head) {
    arr.push(head.data);
    head = head.next;
  }

  return arr;
}

module.exports = {
  Node,
  getLinkList,
  arraifyLinkList,
};
