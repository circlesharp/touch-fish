const solution = arr => {
  /* base case; dpTable: 以arr[i]结尾的最长子序列 */
  const dpTable = Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        /* dpFunction */
        dpTable[i] = Math.max(dpTable[i], dpTable[j] + 1);
      }
    }
  }

  let max = -Infinity;
  for (const count of dpTable) {
    max = Math.max(max, count)
  }

  return max;
}

module.exports = {
  solution,
};
