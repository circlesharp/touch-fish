const solution = (root) => {
  const info = { total: 0 };

  _traversal(root, 0, info);

  return info.total;
};

// fn: (root: node, sum, info) => void
const _traversal = (root, sum, info) => {
  if (!root) return;

  const curSum = sum * 10 + root.val;

  if (!root.left && !root.right) {
    info.total += curSum;
    return;
  }

  _traversal(root.left, curSum, info);
  _traversal(root.right, curSum, info);
};
