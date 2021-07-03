// * 中序遍历方法2 迭代法
const solution = (root) => {
  if (!root) return [];

  const result = [];
  const stack = [];
  let node = root;

  while (node || stack.length) {
    // * 相当于 traversal(node.left);
    while (node) {
      stack.push(node);
      node = node.left;
    }

    // * 控制器
    node = stack.pop();

    // * 相当于 visit(node);
    result.push(node.val);

    // * 相当于 traversal(node.right);
    node = node.right;
  }

  return result;
};
