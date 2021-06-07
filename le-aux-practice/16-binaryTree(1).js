/* binary tree 01 */

/* LeetCode 226 翻转二叉树 */
const invertTree = root => {
  if (root == null)
    return null;

  /* 前序遍历 */
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

/* LeetCode 116 填充二叉树节点的左侧指针 */
const connect = root => {
  if (!root) {
    return null;
  }

  connectTwoNode(root.left, root.right);

  return root;
}

const connectTwoNode = (left, right) => {
  if (!left || !right) {
    return;
  }

  left.next = right;

  connectTwoNode(left.left, left.right);
  connectTwoNode(right.left, right.right);
  connectTwoNode(left.right, right.left);
};

/* LeetCode 114 二叉树展开为链表 */
const flatten = root => {
  if (!root) {
    return;
  }

  flatten(root.left);
  flatten(root.right);

  // 后序遍历：先拉平左右，然后组装

  const left = root.left;
  const right = root.right;

  root.left = null;
  root.right = left;

  let node = root; // 不能直接用 left, 因为可能为 null
  while (node.right) {
    node = node.right;
  }
  node.right = right;
}

module.exports = {
  invertTree,
  connect,
  flatten,
};
