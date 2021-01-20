/**
 * TSSN 实现
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays_1 = (nums1, nums2) => {
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

const findMedianSortedArrays = (nums1, nums2) => {
  // for (let i = 0; i < 10; i++)
    // console.log(i, i + 1, findKth(nums1, nums2, 0, 0, i));

  console.log(findKth(nums1, nums2, 0, 0, 2));
};

const findKth = (arr1, arr2, start1, start2, k) => {
  // console.log(k, start1, start2);
  if (k === 0)
    return Math.min(arr1[start1], arr2[start2]);
  if (k === 1) {
    if (arr1[start1] < arr2[start2])
      return Math.min(arr1[start1 + 1], arr2[start2]);
    return Math.min(arr1[start1], arr2[start2 + 1]);
  }
  
  /* k >= 2, 即自然语言的第 3 个 */
  const halfK = k / 2 | 0;
  // console.log(k, halfK, arr1[start1 + halfK], arr2[start2 + halfK]);
  if (arr1[start1 + halfK - 1] < arr2[start2 + halfK - 1]) {
    return findKth(arr1, arr2, start1 + halfK + 1, start2, k - halfK - 1);
  } else {
    return findKth(arr1, arr2, start1, start2 + halfK + 1, k - halfK - 1);
  }
}

findMedianSortedArrays([1,3,5,7,9], [2,4,6,8,10]);
// console.log(findMedianSortedArrays([1,3,5,7,9], [2,4,6,8,10]));
