const solution = root => {
  const [a, b] = _traversal(root);

  return Math.max(a, b);
}

const _traversal = root => {
  if (!root) {
    return [0, 0];
  }

  const [la, lb] = _traversal(root.left);
  const [ra, rb] = _traversal(root.right);

  const a = lb + rb + root.val;
  const b = Math.max(la, lb) + Math.max(ra, rb);

  return [a, b];
}
