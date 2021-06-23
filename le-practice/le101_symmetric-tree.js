const solution = root => {
  return _traversal(root, root);
};

const _traversal = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b) return false;

  return (
    a.val === b.val
    && _traversal(a.left, b.right)
    && _traversal(a.right, b.left)
  );
}
