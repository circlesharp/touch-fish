/* monotonic queue && max sliding window */

/* 单调队列 */
/* 队列保持一定的顺序 */
class MonotonicQueue {
  constructor() {
    this._queue = [];
  }

  add(val) {
    while (this._queue.length) {
      if (this._queue[this._queue.length - 1] > val) {
        break;
      }
      this._queue.pop();
    }
    this._queue.push(val);
  }

  top() {
    return this._queue[0];
  }

  delete(val) {
    if (this.top() === val) {
      return this._queue.shift();
    }
  }
}

/* ([1,3,-1,-3,5,3,6,7], 3) => [3,3,5,5,6,7] */
const maxSlidingWindow = (nums, k) => {
  const result = [];
  const _window = new MonotonicQueue();
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      _window.add(nums[i]);
    } else {
      _window.add(nums[i]);
      result.push(_window.top());
      _window.delete(nums[i - k + 1]);
    }
  }

  return result;
}

module.exports = {
  MonotonicQueue,
  maxSlidingWindow,
}
