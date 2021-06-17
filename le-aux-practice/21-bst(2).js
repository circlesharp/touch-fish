const Tree = require('../utils/Tree');
const TreeNode = Tree._GetNode;

/* 判断 BST 的合法性 */
const isValidBST = root => {
  return _isValidBST(root, null, null);
};

const _isValidBST = (root, min, max) => {
  if (!root) {
    return true;
  }

  if (min && root.data <= min.data) {
    return false;
  }

  if (max && root.data >= max.data) {
    return false;
  }

  return _isValidBST(root.left, min, root) && _isValidBST(root.right, root, max);
};

/* 在 BST 搜索一个数 */
const isInBST = (root, target) => {
  if (!root) {
    return false;
  }

  if (root.data === target) {
    return true;
  }

  if (root.data > target) {
    return isInBST(root.left, target);
  }

  if (root.data < target) {
    return isInBST(root.right, target);
  }
};

/* 往 BST 插入一个数 */
const insertIntoBST = (root, target) => {
  if (!root) {
    return TreeNode(target);
  }

  if (root.data === target) {
    // 一般不这么操作
  } else if (root.data < target) {
    root.right = insertIntoBST(root.right, target);
  } else if (root.data > target) {
    root.left = insertIntoBST(root.left, target);
  }

  return root;
};

/* 在 BST 删除一个数 */
const deleteFromBST = (root, target) => {
  if (!root) {
    return null;
  }

  if (root.data === target) {
    if (!root.left && !root.right) {
      /* case 1 无子结点 */
      return null;
    } else if (!root.left && root.right) {
      /* case 2 一个子结点 */
      return root.right;
    } else if (root.left && !root.right) {
      /* case 3 一个子结点 */
      return root.left;
    } else if (root.left && root.right) {
      /* case 4 两个子结点 */
      let node = _getMinNode(root.right);
      const right = deleteFromBST(root.right, node.data); // ps 在删除操作前不要操作 node
      node.left = root.left;
      node.right = right;

      return node;
    }
  } else if (root.data > target) {
    root.left = deleteFromBST(root.left, target);
  } else if (root.data < target) {
    root.right = deleteFromBST(root.right, target);
  }

  return root;
};

/* (root: node) => node */
const _getMinNode = root => {
  if (!root) {
    return null;
  }

  if (root.left) {
    return _getMinNode(root.left);
  }

  return root;
};

module.exports = {
  isValidBST,
  isInBST,
  insertIntoBST,
  _getMinNode,
  deleteFromBST,
};
