const moment = require('moment');

// ================== 模拟 Local Storage ==================
const _storage = {}; // key: {value, expireAt}
const _get = key => _storage[key];
const _set = (key, value) => {
  _storage[key] = value;
}

// ================== 具有生命周期的 Storage 实现 ==================

class StorageWithLifeCycle {
  constructor() { }

  /**
   * SetStorage 设置携带过期时间的元素 key: {value, expireAt}
   * @param {string} param0.key 
   * @param {any} param0.value 
   * @param {number} param0.expireAt
   * @param {object} param0.duration 符合 moment.js 【操作】规范： {days:7,months:1}
   */
  static SetStorage({ key, value, expireAt, duration }) {
    if (duration && !expireAt) {
      // 计算出 expireAt
      expireAt = +moment().add(duration);
    }
    _set(key, { value, expireAt });
  }

  /**
   * 
   * @param {string} key 
   * @returns {any} value
   */
  static GetStorage(key) {
    const { value, expireAt } = _get(key);
    if (expireAt >= +new Date()) {
      return value;
    }
  }
}


// ================== example 1 - Duration ==================
StorageWithLifeCycle.SetStorage({
  key: 'testDuration',
  value: 'expire at 2s, use duration',
  duration: { second: 2 },
});

console.log('should be ok:', StorageWithLifeCycle.GetStorage('testDuration')); // ok

setTimeout(() => {
  console.log('should be fail:', StorageWithLifeCycle.GetStorage('testDuration')); // fail
}, 3000);

// ================== example 2 - expireAt ==================
StorageWithLifeCycle.SetStorage({
  key: 'testExpireAt',
  value: 'expire at 2000ms, use expireAt',
  expireAt: +moment().add({ milliseconds: 2000 }),
});

console.log('should be ok:', StorageWithLifeCycle.GetStorage('testExpireAt')); // ok

setTimeout(() => {
  console.log('should be fail:', StorageWithLifeCycle.GetStorage('testExpireAt')); // fail
}, 3000);
