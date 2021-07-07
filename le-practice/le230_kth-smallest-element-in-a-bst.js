const solution = (root, k) => {
  const stack = [];
  const result = [];

  let curNode = root;

  while (result.length < k) {
    curNode = visitOne(curNode, stack, result);
  }

  return result[k - 1].val;
}

const visitOne = (node, stack, result) => {
  while (node) {
    stack.push(node);
    node = node.left;
  }

  node = stack.pop();

  result.push(node);

  return node.right;
}
