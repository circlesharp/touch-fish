const solution = (root, target) => {
  return _traversal(root, target);
}

const _traversal = (root, target) => {
  /* 处理根节点 */
  if (!root) {
    return false;
  }

  /* 处理叶节点 */
  if (!root.left && !root.right) {
    return target === root.val;
  }

  return _traversal(root.left, target - root.val)
    || _traversal(root.right, target - root.val);
}
