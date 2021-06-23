const solution = root => {
  const arr = [];
  _traversal(root, arr);

  let x, y;
  let i, j;

  for (i = 0; i < arr.length - 1; i++) {
    j = i + 1;
    if (arr[i].val > arr[j].val) {
      y = arr[j];
      if (x == null) {
        x = arr[i];
      }
    }
  }

  _sway(x, y);

  return root;
}

const _traversal = (root, arr) => {
  if (!root) {
    return
  }

  _traversal(root.left, arr);
  arr.push(root);
  _traversal(root.right, arr);
}

const _sway = (x, y) => {
  const tempVal = x.val;
  x.val = y.val;
  y.val = tempVal;
}
