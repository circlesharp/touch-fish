// * 后序遍历

const NULL = 'null';
const SEP = ',';

const serialize = root => {
  const result = [];

  if (!root) return '';

  _traversal(root, result);

  return result.join(SEP);
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

const deserialize = data => {
  return data ? _deserialize(data.split(SEP)) : null;
}

const _deserialize = arr => {
  if (arr.length === 0) return null;

  const val = arr.pop();
  if (val === NULL) {
    return null;
  } else {
    const root = new TreeNode(+val);
    root.right = _deserialize(arr);
    root.left = _deserialize(arr);

    return root;
  }
}
