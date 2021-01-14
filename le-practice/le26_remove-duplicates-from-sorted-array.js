/**
 * 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  let p1 = 0;
  let p2 = 0;
  let temp = nums[0];

  for (let i = 1; i < nums.length; i++) {
    p2 += 1;
    if (nums[p2] !== temp) {
      p1 += 1;
      temp = nums[p2];
      swap(nums, p1, p2)
    }
  }
  
  return p1 + 1;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 2, 2, 2, 3]));
