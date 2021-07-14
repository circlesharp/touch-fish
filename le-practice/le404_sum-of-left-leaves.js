const solution = root => {
  if (!root) return 0;

  const info = { result: 0 };

  _traversal(root, info, false);

  return info.result;
}

const _traversal = (root, info, isLeft) => {
  if (!root) return;

  if (!root.left && !root.right) {
    if (isLeft) {
      info.result += root.val;
    }
    return;
  }

  _traversal(root.left, info, true);
  _traversal(root.right, info, false);
}
