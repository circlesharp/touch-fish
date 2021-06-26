const solution = (root, target) => {
  const result = [];
  const path = [];
  _traversal(root, target, result, path);

  return result;
};

const _traversal = (root, target, result, path) => {
  /* 处理根节点 */
  if (!root) {
    return;
  }

  path.push(root.val);

  /* 处理叶节点 */
  if (!root.left && !root.right) {
    if (target === root.val) {
      result.push(Array.from(path));
    }
  }

  _traversal(root.left, target - root.val, result, path);
  _traversal(root.right, target - root.val, result, path);

  path.pop();
};
