// * 后序遍历方法2 迭代法
const solution = (root) => {
  if (!root) return [];

  const result = [];
  const stack = [];
  let node = root;
  let prev = null;

  while (node || stack.length) {
    // * 相当于 traversal(node.left);
    while (node) {
      stack.push(node);
      node = node.left;
    }

    // * 控制器
    node = stack.pop();

    if (node.right && node.right !== prev) {
      // node.right !== prev 是为了溯游而上
      // * 相当于 traversal(node.right);
      stack.push(node);
      node = node.right;
    } else {
      // * 相当于 visit(node);
      result.push(node.val);
      prev = node;
      node = null;
    }
  }

  return result;
};
