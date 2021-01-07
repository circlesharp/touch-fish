/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const len = nums.length;
  for (let j = 0; j < len; j++) {
    for (let i = j + 1; i < len; i++) {
      if (nums[j] + nums[i] === target)
        return [j, i];
    }
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15], 9));
