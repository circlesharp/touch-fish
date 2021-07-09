const solution = (root) => {
  const paths = [];

  _traversal(root, '', paths);

  return paths;
};

const _traversal = (root, path, paths) => {
  if (!root) {
    return;
  }

  path += `->${root.val}`;

  if (!root.left && !root.right) {
    paths.push(path.slice(2));
    return;
  }

  _traversal(root.left, path, paths);
  _traversal(root.right, path, paths);
};
