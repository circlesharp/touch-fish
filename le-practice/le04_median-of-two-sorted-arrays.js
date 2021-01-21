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


/* 二分实现 find kth */
const findMedianSortedArrays = (nums1, nums2) => {
  const len = nums1.length + nums2.length;
  return (findKth(nums1, nums2, 0, 0, (len + 1) / 2 | 0) + findKth(nums1, nums2, 0, 0, (len + 2) / 2 | 0)) / 2;
};

const findKth = (arr1, arr2, i, j, k) => {
  /* 1 无值可取 */
  if (i >= arr1.length) return arr2[j + k - 1];
  if (j >= arr2.length) return arr1[i + k - 1];

  /* 2 取第一个 */
  if (k === 1) return Math.min(arr1[i], arr2[j]);

  /* 3 常规情况 */
  const halfK = k / 2 | 0;
  const value1 = (i + halfK - 1 < arr1.length) ? arr1[i + halfK - 1] : Infinity;
  const value2 = (j + halfK - 1 < arr2.length) ? arr2[j + halfK - 1] : Infinity;
  if (value1 < value2)
    return findKth(arr1, arr2, i + halfK, j, k - halfK);
  return findKth(arr1, arr2, i, j + halfK, k - halfK);
}

const test = (a,b) => {
  for (let i = 1; i <= 10; i++)
    console.log(findKth(a, b, 0, 0, i));
}

let a1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
let a2 = [0,6];

// let rst = findMedianSortedArrays(a1, a2);
// console.log(rst);

for (let i = 1; i <= 24; i++)
  console.log(findKth(a1, a2, 0, 0, i));
