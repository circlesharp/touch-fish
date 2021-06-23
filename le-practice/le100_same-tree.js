const solution = (a, b) => {
  return _traversal(a, b);
}

const _traversal = (a, b) => {
  if (!a && !b) return true;
  if (a && !b) return false;
  if (!a && b) return false;

  return (a.val === b.val)
    && _traversal(a.left, b.left)
    && _traversal(a.right, b.right);
}
