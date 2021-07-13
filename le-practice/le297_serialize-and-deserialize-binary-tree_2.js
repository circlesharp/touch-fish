// * 后序遍历

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

  _traversal(root.left, result);
  _traversal(root.right, result);
  result.push(root.val);
}

const deserialize = arr => {
  if (arr.length === 0) return null;

  const val = arr.pop();
  if (val === NULL) {
    return null;
  } else {
    const root = new TreeNode(val);
    root.right = deserialize(arr);
    root.left = deserialize(arr);

    return root;
  }
}
