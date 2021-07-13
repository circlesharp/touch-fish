// * 层序遍历

const NULL = null;

const serialize = root => {
  const result = [];
  const queue = [];
  let node;

  if (!root) return result;

  queue.push(root);

  while (queue.length) {
    node = queue.shift();

    if (node === null) {
      result.push(NULL);
      continue;
    }

    result.push(node.val);

    queue.push(node.left);
    queue.push(node.right);
  }

  return result;
};

const deserialize = arr => {
  if (arr.length === 0) return null;

  const queue = [];
  let val = arr.shift();
  let root = new TreeNode(val);
  let node;

  queue.push(root);

  while (queue.length) {
    node = queue.shift();
    val = arr.shift();
    if (val !== NULL) {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }
    val = arr.shift();
    if (val !== NULL) {
      node.right = new TreeNode(val);
      queue.push(node.right);
    }
  }

  return root;
}
