const Tree = require('../utils/Tree');
const TreeNode = Tree._GetNode;

/* LeetCode 96 count  */
const numTrees = n => {
  const memo = Array(n - 1).fill(null);
  const result = _numTrees(1, n, memo);

  return result;
};

/* [start, end] */
const _numTrees = (start, end, memo) => {
  const gap = end - start;
  if (memo[gap] != null) {
    return memo[gap];
  }

  if (start > end) {
    return 1;
  }

  let result = 0;

  for (let i = start; i <= end; i++) {
    const numLeft = _numTrees(start, i - 1, memo);
    const numRight = _numTrees(i + 1, end, memo);
    result += (numLeft * numRight);
  }
  memo[gap] = result;

  return result;
}

/* LeetCode 95 generate all BST */
const generateTrees = n => {
  return _generateTrees(1, n);
}

const _generateTrees = (start, end) => {
  if (end < start) {
    return [null];
  }

  const result = [];
  for (let i = start; i <= end; i++) {
    const lefts = _generateTrees(start, i - 1);
    const rights = _generateTrees(i + 1, end);

    for (const lNode of lefts) {
      for (const rNode of rights) {
        const node = TreeNode(i);
        node.left = lNode;
        node.right = rNode;
        result.push(node);
      }
    }
  }

  return result;
};

module.exports = {
  numTrees,
  generateTrees,
};
