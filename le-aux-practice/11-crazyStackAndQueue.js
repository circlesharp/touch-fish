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

module.exports = {
  CrazyQueue,
};
