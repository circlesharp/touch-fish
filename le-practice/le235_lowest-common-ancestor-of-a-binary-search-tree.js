const solution = (root, p, q) => {
  const queue = [];
  queue.push(root);

  const larger = Math.max(p.val, q.val);
  const smaller = Math.min(p.val, q.val);

  let node = null;

  while (queue.length) {
    node = queue.shift();

    if (node.left)
      queue.push(node.left);

    if (node.right)
      queue.push(node.right);

    if (node.val >= smaller && node.val <= larger) {
      break;
    }
  }

  return node;
}
