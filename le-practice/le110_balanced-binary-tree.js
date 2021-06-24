const INVALID_HEIGHT = -1;

const solution = function (root) {
  return _traversal(root) !== INVALID_HEIGHT;
}

const _traversal = (root) => {
  if (!root) {
    return 0;
  }

  const lHeight = _traversal(root.left);
  const rHeight = _traversal(root.right);

  if (lHeight === INVALID_HEIGHT || rHeight === INVALID_HEIGHT) {
    return INVALID_HEIGHT;
  } else if (Math.abs(lHeight - rHeight) > 1) {
    return INVALID_HEIGHT;
  } else {
    return 1 + Math.max(lHeight, rHeight);
  }
}
