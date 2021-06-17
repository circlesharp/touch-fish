/* LeetCode 230 find kth smallest item of BST */
const findKthSmallest = (root, k) => {
  const info = {
    rank: 0,
    result: -1,
  };

  _findKthSmallest(root, k, info);

  return info.result;
};

const _findKthSmallest = (root, k, info) => {
  if (!root) {
    return;
  }

  _findKthSmallest(root.left, k, info);

  info.rank += 1;
  if (info.rank === k) {
    info.result = root.data;
    return;
  }

  _findKthSmallest(root.right, k, info);
};

/* method NO.2: BST's node with size information */
const findKthSmallest_2 = (root, k) => {
  const info = {
    result: -1,
  };

  _findKthSmallest_2(root, k, info);

  return info.result;
};

const _findKthSmallest_2 = (root, k, info) => {
  if (!root) {
    return;
  }

  // 待续。。。
};

/* LeetCode 538, 1038 BST转化累加树 */
const convertBST = (root) => {
  const info = {
    sum: 0,
  };

  _convertBST(root, info);

  return root;
};

const _convertBST = (root, info) => {
  if (!root) {
    return;
  }

  _convertBST(root.right, info);
  info.sum += root.data;
  root.data = info.sum;
  _convertBST(root.left, info);
};

module.exports = {
  findKthSmallest,
  findKthSmallest_2,
  convertBST,
};
