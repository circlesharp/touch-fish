const solution = root => {
  const info = { max: -Infinity };

  _traversal(root, info);

  return info.max;
}

// * node => nodeMaxVal: number
const _traversal = (root, info) => {
  // ! 不能取0，因为节点的值可以是负数
  if (!root) return -Infinity;

  const leftMaxVal = _traversal(root.left, info);
  const rightMaxVal = _traversal(root.right, info);

  // ** 得出节点的最大贡献
  const nodeMaxVal = root.val + Math.max(leftMaxVal, rightMaxVal, 0);

  // ** 更新树的最大贡献
  // ** 左子树 右子树 节点最大贡献 节点与左右子树的最大贡献
  info.max = Math.max(info.max, nodeMaxVal, leftMaxVal, rightMaxVal, leftMaxVal + rightMaxVal + root.val);

  return nodeMaxVal;
}
