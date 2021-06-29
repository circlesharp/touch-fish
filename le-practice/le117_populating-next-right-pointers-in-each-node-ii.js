const Queue = require('../utils/Queue');

const solution = root => {
  if (!root)
    return root;

  const queue = new Queue();
  queue.add(root);

  let numsOfThisLayer;
  let node;

  while (!queue.empty()) {
    numsOfThisLayer = queue.size();
    for (let i = 0; i < numsOfThisLayer; i++) {
      node = queue.delete();

      if (i < numsOfThisLayer - 1)
        node.next = queue.top();

      if (node.left)
        queue.add(node.left);
      if (node.right)
        queue.add(node.right);
    }
  }

  return root;
}

