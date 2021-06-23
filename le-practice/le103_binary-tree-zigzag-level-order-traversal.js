const solution = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const pushInRow = _pushInRow(result);
  const unshiftInRow = _unshiftInRow(result);

  const queue = []; // Array<item>, type item { level, node }
  queue.push({ level: 0, node: root });

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (level % 2) {
      unshiftInRow(level, node.val);
    } else {
      pushInRow(level, node.val);
    }

    if (node.left) {
      queue.push({ level: level + 1, node: node.left });
    }
    if (node.right) {
      queue.push({ level: level + 1, node: node.right });
    }
  }

  return result;
}

const _pushInRow = arr =>
  (row, value) => {
    if (arr[row] == null) {
      arr[row] = [];
    }
    arr[row].push(value);
  }

const _unshiftInRow = arr =>
  (row, value) => {
    if (arr[row] == null) {
      arr[row] = [];
    }
    arr[row].unshift(value);
  }
