const solution = root => {
  return _traversal(root);
}

const _traversal = root => {
  if (!root) return null;

  let node = root.left;
  root.left = _traversal(root.right);
  root.right = _traversal(node);

  return root;
}
