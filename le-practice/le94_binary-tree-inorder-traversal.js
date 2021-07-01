// * 中序遍历方法2 迭代法
const solution = (root) => {
  const result = [];
  const stack = [];
  let node = root;

  // * 相当于 traversal(node.right);
  while (node || stack.length) {
    // * 相当于 traversal(node.left);
    while (node) {
      stack.push(node);
      node = node.left;
    }

    // * 相当于 visit(node);
    node = stack.pop();
    result.push(node.val);

    node = node.right;
  }

  return result;
};
