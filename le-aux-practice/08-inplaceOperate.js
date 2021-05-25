/* LeetCode 26 有序数组去重 */
/* ([1,1,2]) => 2 (1,2) */
/* ([0,0,1,1,1,2,2,3,3,4]) => 5 (0,1,2,3,4) */
const removeDuplicates = (nums) => {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left += 1;
      nums[left] = nums[right];
    }
    right += 1;
  }

  return left + 1;
};

/* LeetCode 26.5 有序链表去重 */
const removeDuplicatesOfLinkList = (head) => {
  let left = head;
  let right = head;
  while (right) {
    if (left.data !== right.data) {
      left = left.next;
      left.data = right.data;
    }
    right = right.next;
  }

  left.next = null;
};
/* 参考答案 直接改变 next 指针，而不是改变 data */
const removeDuplicatesOfLinkList_2 = (head) => {
  let left = head;
  let right = head;
  while (right) {
    if (left.data !== right.data) {
      left.next = right;
      left = left.next;
    }
    right = right.next;
  }

  left.next = null;
};

/* LeetCode 27 移除元素 */
/* ([3,2,2,3], 3) => 2 [2,2,...] */
/* ([0,1,2,2,3,0,4,2], 2) => 5 [0,1,3,0,4] */
const removeElement = (nums, target) => {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] === target) {
      fast += 1;
      continue;
    }
    nums[slow] = nums[fast];
    fast += 1;
    slow += 1;
  }

  return slow;
};

/* LeetCode 283 移动零到最后 */
/* ([0,1,4,0,2]) => [1,4,2,0,0] */
const moveZeroes = (nums) => {
  let slow = 0;
  let fast = 0;
  let temp;
  while (fast < nums.length) {
    if (nums[fast] === 0) {
      fast += 1;
      continue;
    }
    temp = nums[slow];
    nums[slow] = nums[fast];
    nums[fast] = temp;
    slow += 1;
    fast += 1;
  }
};
/* 参考答案，复用之前的函数 */
const moveZeroes_2 = (nums) => {
  const end = removeElement(nums, 0);
  for (let i = end; i < nums.length; i++) {
    nums[i] = 0;
  }
};


module.exports = {
  removeDuplicates,
  removeDuplicatesOfLinkList,
  removeDuplicatesOfLinkList_2,
  removeElement,
  moveZeroes,
  moveZeroes_2,
};
