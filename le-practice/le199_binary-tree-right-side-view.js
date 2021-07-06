const solution = root => {
  if (!root) return [];

  const result = [];
  const queue = [];

  let node = root;
  let size;
  queue.push(node);

  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      if (node.left)
        queue.push(node.left);
      if (node.right)
        queue.push(node.right);
    }
    result.push(node.val);
  }

  return result;
}
