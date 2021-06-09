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

/* 105 preorder, inorder => binary tree */
/* pre=[3,9,20,15,7], in=[9,3,15,20,7] => Tree[3,9,20,15,7] */
const buildPreIn = (preorder, inorder) => {
  return _buildPreIn(preorder, 0, preorder.length, inorder, 0, inorder.length);
};
const _buildPreIn = (preorder, preStart, perEnd, inorder, inStart, inEnd) => {
  if (preStart >= perEnd || inStart >= inEnd) {
    console.log(2444);
    return null;
  }

  const nodeVal = preorder[preStart];
  const inRootIdx = inorder.findIndex(i => i === nodeVal);
  const preRightRootIdx = inRootIdx + 1; // 子树的节点一定是一致的
  console.log(2333, nodeVal, inRootIdx, preRightRootIdx);

  const root = TreeNode(nodeVal);
  root.left = _buildPreIn(preorder, preStart + 1, preRightRootIdx, inorder, inStart, inRootIdx + 1);
  root.right = _buildPreIn(preorder, preRightRootIdx, perEnd, inorder, inRootIdx + 1, inEnd)

  return root;
};

module.exports = {
  constructMaximumBinaryTree,
  buildPreIn,
  _findArrayRangeMaxIndex,
}
