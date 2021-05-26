/* 结合哈希表和数组，使得数组查找和删除的时间复杂度稳定在 O(1) */

/* LeetCode 380 实现随机集合 */
/* insert => Boolean */
/* remove => Boolean */
/* insert => Boolean */
class RandomizedSet {
  constructor() {
    this.nums = [];
    this.valToIndex = {};
  }

  insert(val) {
    if (this.valToIndex.hasOwnProperty(val)) {
      return false;
    }

    this.valToIndex[val] = this.nums.length;
    this.nums.push(val);
    return true;
  }

  remove(val) {
    if (!this.valToIndex.hasOwnProperty(val)) {
      return false;
    }

    const valPos = this.valToIndex[val];
    const lastItem = this.nums[this.nums.length - 1];

    /* 维护 valToIndex */
    delete this.valToIndex[val];
    this.valToIndex[lastItem] = valPos;

    /* 维护 nums */
    this.nums[valPos] = lastItem;
    this.nums.pop();

    return true;
  }

  getRandom() {
    return this.nums[_getRandomInt(0, this.nums.length)];
  }
}

const _getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

module.exports = {
  RandomizedSet,
}
