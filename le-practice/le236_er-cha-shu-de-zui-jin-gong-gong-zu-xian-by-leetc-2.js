const solution = (root, p, q) => {
  const info = { result: null };

  _traversal(root, p, q, info);

  return info.result;
};

/* => bool: this tree has p or q node */
const _traversal = (root, p, q, info) => {
  if (!root) return false;

  const lSon = _traversal(root.left, p, q, info);
  const rSon = _traversal(root.right, p, q, info);

  // * 分别在左右子树中
  if (lSon && rSon) {
    info.result = root;
  }

  // * 其中一个是根
  if (root.val === p.val || (root.val === q.val && (lSon || rSon))) {
    info.result = root;
  }

  // * 返回这个树上是否有 q or p
  return lSon || rSon || root.val === p.val || root.val === q.val;
};
