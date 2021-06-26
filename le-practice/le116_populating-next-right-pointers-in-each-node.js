const solution = (root) => {
  if (!root) return root;

  _traversal(root.left, root.right);
  return root;
};

const _traversal = (left, right) => {
  if (!left) return;

  left.next = right;

  _traversal(left.left, left.right);
  _traversal(left.right, right.left);
  _traversal(right.left, right.right);
};
