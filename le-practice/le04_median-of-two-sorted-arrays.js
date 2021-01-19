/**
 * TSSN 实现
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const len = nums1.length + nums2.length;
  const midIdx = len / 2 | 0; // 最多需要的有用的位数，也是中位数的关键索引
  
  nums1.push(Infinity);
  nums2.push(Infinity);

  let temp1 = nums1.shift();
  let temp2 = nums2.shift();
  let rst = [];
  let cnt = 0;

  while(cnt <= midIdx) {
    if (temp1 < temp2) {
      rst.push(temp1);
      temp1 = nums1.shift();
    } else {
      rst.push(temp2);
      temp2 = nums2.shift()
    }
    cnt++
  }
  
  if (len % 2)
    return rst[midIdx];

  return (rst[midIdx - 1] + rst[midIdx]) / 2;
};

console.log(findMedianSortedArrays([1,3,5,7,9], [2,4,6,8,10]));
