/* Binary Heap & Priority Queue */
/* 使用二叉堆实现优先队列 */
/* 二叉堆是二叉树，是完全二叉树，（最大堆的）每个结点都大于等于它的子结点 */
/* 通过 swim, sink 维护二叉堆的性质 */

class PriorityQueue {
  constructor(maxSize = 100, compareFn = i => i) {
    /* 第 0 位不使用 */
    this._pq = Array(maxSize + 1);
    this._len = 0;
    this._compareFn = compareFn;
  }

  getMax() {
    return this._pq[1];
  }

  insert(val) {
    this._len += 1;
    this._pq[this._len] = val;
    this._swim(this._len);
  }

  deleteMax() {
    const max = this.getMax();
    this._exch(1, this._len);
    this._pq[this._len] = undefined;
    this._len -= 1;
    this._sink(1);

    return max;
  }

  size() {
    return this._len;
  }

  /* 上浮第 k 个元素 */
  _swim(k) {
    const parentIdx = PriorityQueue._getParentIdx(k);
    if (k <= 1 || this._less(k, parentIdx)) {
      return;
    }

    this._exch(k, parentIdx);
    this._swim(parentIdx);
  }

  /* 下沉第 k 个元素 */
  _sink(k) {
    const leftIdx = PriorityQueue._getLeftIdx(k);
    const rightIdx = PriorityQueue._getRightIdx(k);

    /* 边界条件1 如果没有子结点，就在堆底 */
    if (leftIdx > this._len) {
      return;
    }

    /* 边界条件2 父结点不比较大的子结点小 */
    let largerChildIdx;
    if (rightIdx <= this._len && this._less(leftIdx, rightIdx)) {
      largerChildIdx = rightIdx;
    } else {
      largerChildIdx = leftIdx;
    }
    if (!this._less(k, largerChildIdx)) {
      return;
    }

    this._exch(k, largerChildIdx);
    this._sink(largerChildIdx);
  }

  /* 交换 i, j 元素 */
  _exch(i, j) {
    const temp = this._pq[i];
    this._pq[i] = this._pq[j];
    this._pq[j] = temp;
  }

  /* 判断第 i 个元素是否比第 j 个小 */
  _less(i, j) {
    return this._compareFn(this._pq[i]) < this._compareFn(this._pq[j]);
  }

  _getPQ() {
    return this._pq.slice(1, this._len + 1);
  }

  static _getParentIdx(k) {
    return k / 2 | 0;
  }

  static _getLeftIdx(k) {
    return k * 2;
  }

  static _getRightIdx(k) {
    return k * 2 + 1;
  }
}

module.exports = {
  PriorityQueue,
};
