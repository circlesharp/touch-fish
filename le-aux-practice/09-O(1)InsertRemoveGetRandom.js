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

/* LeetCode 710 避开黑名单的随机数且尽可能少地使用 random */
/* (5, [1,3]) => random(0,2,4) */
/* (8, [0,5,7]) => random(1,2,3,4,6) */
class RandomWithoutBlackList {
  constructor(n, blackList) {
    this.size = n - blackList.length; // 白名单的边界 [0, size)
    this.map = {}; // 存放 黑名单的 & 调换位置的 索引-值

    let last = n - 1;

    for (const blackItem of blackList) {
      this.map[blackItem] = -1;
    }

    for (const blackItem of blackList) {
      if (blackItem < this.size) {
        while (this.map.hasOwnProperty(last)) {
          last -= 1;
        }

        this.map[blackItem] = last; // 无意义 不需记录
        // this.map[last] = blackItem;
        last -= 1;
      }
    }
  }

  pick() {
    const randIdx = _getRandomInt(0, this.size);
    if (this.map.hasOwnProperty(randIdx)) {
      return this.map[randIdx];
    }
    return randIdx;
  }
}

const _getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
};

module.exports = {
  RandomizedSet,
  RandomWithoutBlackList,
};
