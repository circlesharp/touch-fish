/* 用栈实现队列 */

const Queue = require('../utils/Queue');
const Stack = require('../utils/Stack');

class CrazyQueue {
  constructor() {
    this.addStack = new Stack();
    this.delStack = new Stack();
  }

  /* 添加到队尾 */
  add(val) {
    this.addStack.push(val);
  }

  /* 删除队头并返回 */
  delete() {
    this.top();
    return this.delStack.pop();
  }

  /* 返回队头 */
  top() {
    if (this.delStack.empty()) {
      while (!this.addStack.empty()) {
        this.delStack.push(this.addStack.pop());
      }
    }

    return this.delStack.top();
  }

  /* 是否为空 */
  empty() {
    return this.addStack.empty() && this.delStack.empty();
  }

  /* get size */
  size() {
    return this.addStack.size() + this.delStack.size();
  }
}

class CrazyStack {
  constructor() {
    this._queue = new Queue();
    this._topVal = undefined;
  }

  size() {
    return this._queue.size();
  }

  top() {
    // 默认用户操作前先确保 size > 0
    return this._topVal;
  }

  push(val) {
    this._topVal = val;
    this._queue.add(val);
  }

  pop() {
    let size = this.size();
    while (size > 2) {
      this._queue.add(this._queue.delete())
      size -= 1;
    }

    this._topVal = this._queue.top();
    this._queue.add(this._queue.delete());
    return this._queue.delete();
  }

  empty() {
    return this._queue.empty();
  }
}

module.exports = {
  CrazyQueue,
  CrazyStack,
};
