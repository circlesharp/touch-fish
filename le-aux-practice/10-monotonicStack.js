/* Monotonic Stack 单调栈 */
/* 每次新元素入栈后，栈内元素都保持有序 */

const Stack = require('../utils/Stack');

/* Next Great Number */
/* ([2,1,2,4,3]) => [4,2,4,-1,-1] */
/* ([1,5,2,6,3,7,4,8,5]) => [5,6,6,7,7,8,8,-1,-1] */
const nextGreatNumber = (nums) => {
  const result = new Array(nums.length);
  const stack = new Stack();

  for (let i = nums.length - 1; i >= 0; i--) { // 从后往前
    while (stack.size() && stack.top() <= nums[i]) {
      stack.pop(); // 因为小, 前面的更加看不到这个小家伙
    }
    result[i] = stack.empty() ? -1 : stack.top();
    stack.push(nums[i]); // 前面没有比它更小的了
  }

  return result;
};

/* waitWarmer 至少等多少天才能等到一个更暖和的天气 */
/* ([73,74,75,71,69,72,76,73]) => [1,1,4,2,1,1,0,0] */
const waitWarmer = (temperatures) => {
  const result = Array(temperatures.length);
  const stack = new Stack();

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (!stack.empty() && stack.top().data <= temperatures[i]) {
      stack.pop();
    }
    result[i] = stack.empty() ? 0 : (stack.top().index - i);
    stack.push({ data: temperatures[i], index: i });
  }

  return result;
};
/* 参考答案 存入索引而非值 */
const waitWarmer_2 = (temperatures) => {
  const result = Array(temperatures.length);
  const stack = new Stack();
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (!stack.empty() && temperatures[stack.top()] <= temperatures[i]) {
      stack.pop();
    }
    result[i] = stack.empty() ? 0 : (stack.top() - i);
    stack.push(i);
  }

  return result;
};

/* Next Great Number 之循环数组 */
/* 可以物理上的数组**加倍**，也可以逻辑上实现加倍 */
const nextGreatNumberOfCircleArray = (nums) => {
  const result = [];
  const stack = new Stack();
  const len = nums.length;

  for (let i = len * 2 - 1; i >= 0; i--) {
    while (!stack.empty() && stack.top() <= nums[i % len]) {
      stack.pop();
    }
    result[i % len] = stack.empty() ? -1 : stack.top();
    stack.push(nums[i % len]);
  }

  return result;
};

module.exports = {
  nextGreatNumber,
  waitWarmer,
  waitWarmer_2,
  nextGreatNumberOfCircleArray,
};
