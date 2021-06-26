const solution = (root) => {
  _traversal(root);

  return root;
};

/* Node => Node(ps. leaf) */
const _traversal = (root) => {
  if (!root) return null;

  if (!root.left && !root.right) {
    /* 左右都无 */
    return root;
  }

  const left = root.left;
  const right = root.right;

  const lLeaf = _traversal(left);
  const rLeaf = _traversal(right);

  root.left = null;

  if (!left) {
    /* 仅有左 */
    root.right = right;
    return rLeaf;
  } else if (!right) {
    /* 仅有右 */
    root.right = left;
    return lLeaf;
  } else {
    /* 左右都有 */
    root.right = left;
    lLeaf.right = right;
    return rLeaf;
  }
};
