/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  if (nums == null || nums.length < 3)
    return [];
  
  const rst = [];
  const sortedNums = nums.sort((a, b) => a - b);
  let i, left, right;
  let a, b, c;

  for(i = 0; i < sortedNums.length - 2 && sortedNums[i] <= 0; i++) {
    left = i + 1;
    right = sortedNums.length - 1;
    
    while(left < right) {
      a = sortedNums[i];
      b = sortedNums[left];
      c = sortedNums[right];
      if (a + b + c < 0) {
        left += 1;
      } else if (a + b + c > 0) {
        right -= 1;
      } else {
        // a + b + c === 0
        rst.push([a, b, c]);

        while(b === sortedNums[++left]) {}
        while(c === sortedNums[--right]) {}
        while (a === sortedNums[i + 1]) {
          i += 1;
        }
      }
    }
  }

  return rst;
};

console.log(
  threeSum([-1,0,1,2,-1,-4]),
  [[-1,-1,2],[-1,0,1]],
);

console.log(
  threeSum([-4,-1,-4,0,2,-2,-4,-3,2,-3,2,3,3,-4]),
  [[-4,2,2],[-3,0,3],[-2,-1,3],[-2,0,2]],
);

console.log(
  threeSum([]),
  [],
);

console.log(
  threeSum([0]),
  [],
);
