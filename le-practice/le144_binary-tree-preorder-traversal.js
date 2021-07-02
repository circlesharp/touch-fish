// * 先序遍历方法2 迭代法
const solution = root => {
  if (!root) return [];

  const result = [];
  const stack = [root];
  let node;

  while (stack.length) {
    node = stack.pop();
    result.push(node.val);

    // * right left 顺序颠倒是为了后进先出
    // * 用后进先出的结构因为递归是隐性的栈
    if (node.right)
      stack.push(node.right);

    if (node.left)
      stack.push(node.left);
  }

  return result;
}