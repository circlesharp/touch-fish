const solution = root => {
  return _traversal(root);
}

const _traversal = root => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(_traversal(root.left), _traversal(root.right));
}
