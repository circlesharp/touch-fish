const solution = root => {
  return _traversal(root);
}

const _traversal = root => {
  if (!root)
    return 0;

  const lHeight = _traversal(root.left);
  const rHeight = _traversal(root.right);
  let childHeight;

  if (lHeight === 0) {
    childHeight = rHeight;
  } else if (rHeight === 0) {
    childHeight = lHeight;
  } else {
    childHeight = Math.min(lHeight, rHeight);
  }

  return 1 + childHeight;
}
