// * 先序遍历

const NULL = null;

const serialize = root => {
  const result = [];

  if (!root) return result;

  _traversal(root, result);

  return result;
};

const _traversal = (root, result) => {
  if (!root) {
    result.push(NULL);
    return;
  }

  result.push(root.val);

  _traversal(root.left, result);
  _traversal(root.right, result);
}

const deserialize = arr => {
  if (arr.length === 0) return null;

  const val = arr.shift();
  if (val === NULL) {
    return null;
  } else {
    const root = new TreeNode(val);
    root.left = deserialize(arr);
    root.right = deserialize(arr);

    return root;
  }
}
