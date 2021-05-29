class Queue {
  constructor() {
    this._queue = [];
  }

  size() {
    return this._queue.length;
  }

  /* 添加到队尾 */
  add(val) {
    this._queue.push(val)
  }

  /* 删除队头并返回 */
  delete() {
    return this._queue.shift();
  }

  /* 返回队头 */
  top() {
    return this._queue[0];
  }

  /* 是否为空 */
  empty() {
    return this.size() === 0;
  }
}

module.exports = Queue;
