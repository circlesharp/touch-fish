class Node {
  constructor(key) {
    this.next = null;
    this.key = key;
  }
}

class List {
  constructor() {
    this.head = null;
  }
  static createNode(key) {
    return new this.createNode(key);
  }
  insert(node) {
    if (this.head)
      node.next = this.head;
    else
      node.next = null;
    this.head = node;
  }
  find(key) {
    let node = this.head;
    while (node !== null && node.key !== key)
      node = node.next;
    return node;
  }
  delete(node) {
    if (node === this.head) {
      this.head = node.next;
      return;
    }
    let prevNode = this.head;
    while (prevNode.next !== node)
      prevNode = prevNode.next;

    if (node.next === null)
      prevNode.next = null;
    
    if (node.next)
      prevNode.next = node.next;
  }
}
