function findAll(arr, x) {
  const rst = [];
  let start = 0;
  let idx;

  while (start < arr.length) {
    idx = arr.indexOf(x, start);
    if (idx === -1) break;

    rst.push(idx);
    start = idx + 1;
  }

  return rst;
}

console.log(findAll([1, 2, 1, 2, 1, 2, 1], 1));
