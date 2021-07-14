const solution = (root, target) => {
  const sumMap = new Map();
  sumMap.set(null, []);
  const info = { result: 0, sumMap, target };
  _traversal(root, info);

  return info.result;
}

const _traversal = (root, info) => {
  if (!root) return;

  _traversal(root.left, info);
  _traversal(root.right, info);

  const lSums = info.sumMap.get(root.left);
  const rSums = info.sumMap.get(root.right);
  const sums = [...lSums, ...rSums].map(i => i + root.val);
  sums.push(root.val);
  sums.forEach(s => {
    if (s === info.target)
      info.result += 1;
  });
  info.sumMap.set(root, sums);
}
