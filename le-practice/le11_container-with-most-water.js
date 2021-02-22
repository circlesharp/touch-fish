/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea_silly = function(height) {
  let p1, p2;
  let max = 0;
  for (p1 = 0; p1 < height.length - 1; p1++) {
    for (p2 = p1 + 1; p2 < height.length; p2++) {
      max = Math.max(max, (p2 - p1) * Math.min(height[p1], height[p2]))
    }
  }
  return max;
};
const maxArea = function(height) {
  let p1 = 0;
  let p2 = height.length - 1;
  let max = 0;

  while(p1 < p2) {
    max = Math.max(max, (p2 - p1) * Math.min(height[p1], height[p2]));
    if (height[p1] > height[p2])
      p2 -= 1;
    else
      p1 += 1;
  }
  
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]), 49);
console.log(maxArea([1,1]), 1);
console.log(maxArea([4,3,2,1,4]), 16);
