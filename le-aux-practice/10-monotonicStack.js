/* Monotonic Stack 单调栈 */
/* 每次新元素入栈后，栈内元素都保持有序 */

/* Next Great Number */
/* ([2,1,2,4,3]) => [4,2,4,-1,-1] */
const nextGreatNumber = (nums) => {
  const result = [];
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack.pop() <= nums[i]) {

    }
  }
}
