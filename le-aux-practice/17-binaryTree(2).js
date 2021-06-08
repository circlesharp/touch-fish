/* binary tree 02 */

const Tree = require('../utils/Tree');
const TreeNode = Tree._GetNode;

/* LeetCode 654 构造最大二叉树 */
/* ([3,2,1,6,0,5]) => Tree[6,3,5,2,0,1] */
/* 根的任务是构造自己 */
const constructMaximumBinaryTree = nums => {
  return _build(nums, 0, nums.length);
};

const _build = (nums, left, right) => {
  if (right <= left) {
    return null;
  }

  const maxIndex = _findArrayRangeMaxIndex(nums, left, right);
  const root = TreeNode(nums[maxIndex]);
  root.left = _build(nums, left, maxIndex);
  root.right = _build(nums, maxIndex + 1, right);

  return root;
};

const _findArrayRangeMaxIndex = (arr, left, right) => {
  let maxValue = -Infinity;
  let maxIndex = -1;
  for (let i = left; i < right; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

module.exports = {
  constructMaximumBinaryTree,
  _build,
  _findArrayRangeMaxIndex,
}
