/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let slowIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val)
      nums[slowIdx++] = nums[i];
  }
  
  return [slowIdx, nums];
};

const rst = removeElement([0,1,2,2,3,0,4,2], 2);
console.log(rst);
