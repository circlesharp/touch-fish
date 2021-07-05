class BSTIterator {
  constructor(root) {
    this.root = root;
    this.node = root;
    this.stack = [];
  }

  next() {
    while (this.node) {
      this.stack.push(this.node);
      this.node = this.node.left;
    }

    this.node = this.stack.pop();

    const val = this.node.val;

    this.node = this.node.right;

    return val;
  }

  hasNext() {
    return this.node || this.stack.length;
  }
}
