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

/* LeetCode 105 preorder, inorder => binary tree */
/* pre=[3,9,20,15,7], in=[9,3,15,20,7] => Tree[3,9,20,15,7] */
const buildPreIn = (preorder, inorder) => {
  return _buildPreIn(preorder, 0, preorder.length, inorder, 0, inorder.length);
};
const _buildPreIn = (preorder, preStart, perEnd, inorder, inStart, inEnd) => {
  if (preStart >= perEnd || inStart >= inEnd) {
    return null;
  }

  const nodeVal = preorder[preStart];
  const inRootIdx = inorder.findIndex(i => i === nodeVal);
  const leftSize = inRootIdx - inStart;

  const root = TreeNode(nodeVal);
  root.left = _buildPreIn(preorder, preStart + 1, preStart + leftSize + 1, inorder, inStart, inRootIdx);
  root.right = _buildPreIn(preorder, preStart + leftSize + 1, perEnd, inorder, inRootIdx + 1, inEnd)

  return root;
};

/* LeetCode 106 postorder, inorder => binary tree */
/* post=[5,6,7,4,2,8,9,3,1], in=[5,2,6,4,7,1,8,3,9] => Tree[1,2,3,5,4,8,9,6,7] */
const buildPostIn = (postorder, inorder) => {
  return _buildPostIn(postorder, 0, postorder.length, inorder, 0, inorder.length);
};

const _buildPostIn = (postorder, postStart, postEnd, inorder, inStart, inEnd) => {
  if (postStart >= postEnd) {
    return null;
  }

  const rootVal = postorder[postEnd - 1];
  const inRootIdx = inorder.findIndex(i => i === rootVal);
  const leftSize = inRootIdx - inStart;

  const root = TreeNode(rootVal);
  root.left = _buildPostIn(postorder, postStart, postStart + leftSize, inorder, inStart, inRootIdx);
  root.right = _buildPostIn(postorder, postStart + leftSize, postEnd - 1, inorder, inRootIdx + 1, inEnd);

  return root;
};

module.exports = {
  constructMaximumBinaryTree,
  buildPreIn,
  buildPostIn,
  _findArrayRangeMaxIndex,
}
