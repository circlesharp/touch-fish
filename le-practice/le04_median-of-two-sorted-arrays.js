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


/* 二分实现 find kth (tmd...太难了) */
const findMedianSortedArrays = (nums1, nums2) => {
  const len = nums1.length + nums2.length;
  if (len % 2)
    return findKth(nums1, nums2, 0, 0, len / 2 | 0);
  return (findKth(nums1, nums2, 0, 0, len / 2 - 1) + findKth(nums1, nums2, 0, 0, len / 2)) / 2;
};

const findKth = (arr1, arr2, start1, start2, k) => {
  // if (k === 0)
  //   return Math.min(arr1[start1] || Infinity, arr2[start2] || Infinity);
  // if (k === 1) {
  //   if (arr1[start1] || Infinity < arr2[start2] || Infinity)
  //     return Math.min(arr1[start1 + 1] || Infinity, arr2[start2] || Infinity);
  //   return Math.min(arr1[start1] || Infinity, arr2[start2 + 1] || Infinity);
  // }

  if (k < 2)
    return [...arr1.slice(start1, start1 + 2), ...arr2.slice(start2, start2 + 1)].sort((a, b) => a - b)[k];

  /* k >= 2 */
  const halfK = k / 2 | 0;

  /* 超出范围 */
  let gap, longStart;
  let shortArr, longArr;
  if (arr1.length < start1 + halfK) {
    gap = arr1.length - start1;
    shortArr = arr1;
    longArr = arr2;
    longStart = start2;
  } else if (arr2.length < start2 + halfK) {
    gap = arr2.length - start2;
    shortArr = arr2;
    longArr = arr1;
    longStart = start1;
  }
  if (gap != null)
    return Math.max(shortArr[shortArr.length - 1] || -Infinity, longArr[longStart + k - gap]); 

  /* 没超范围 */
  if (arr1[start1 + halfK - 1] < arr2[start2 + halfK - 1])
    return findKth(arr1, arr2, start1 + halfK, start2, k - halfK);
  return findKth(arr1, arr2, start1, start2 + halfK, k - halfK);
}

const test = (a,b) => {
  for (let i = 0; i < 10; i++)
    console.log(findKth(a, b, 0, 0, i));
}

const rst = test([6], [1,2,3,4,5,7,8]);

// console.log(rst);
