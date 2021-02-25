/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  
  let rst, tempRst, tempDiff;
  let diff = Infinity;
  let i, left, right;

  for(i = 0; i < sortedNums.length - 2; i++) {
    left = i + 1;
    right = sortedNums.length - 1;
    
    while(left < right) {
      tempRst = sortedNums[i] + sortedNums[left] + sortedNums[right];
      tempDiff = tempRst - target;

      if (Math.abs(tempDiff) < diff) {
        diff = Math.abs(tempDiff);
        rst = tempRst;
      }

      if (tempDiff > 0) {
        right -= 1;
      } else if (tempDiff < 0) {
        left += 1;
      } else {
        return target;
      }
    }
  }

  return rst;
};

console.log(threeSumClosest(
  [-1,2,1,-4], -6
), -4);

console.log(threeSumClosest(
  [-1,2,1,-4], 1
), 2);

console.log(threeSumClosest(
  [0,2,1,-3], 1
), 0);
