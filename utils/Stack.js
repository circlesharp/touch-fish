class Stack {
  constructor() {
    this._stack = [];
  }

  size() {
    return this._stack.length;
  }

  top() {
    return this._stack[this.size() - 1];
  }

  push(val) {
    this.size.push(val)
    return true;
  }

  pop() {
    return this._stack.pop();
  }

  empty() {
    return this.size() === 0;
  }
}

module.exports = Stack;
