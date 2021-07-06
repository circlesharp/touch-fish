/**
 * 1~n floor, n eggs, f floor.
 * 最坏情况下，至少要扔几次，才能确定 f
 * @param {number} k 剩余鸡蛋数
 * @param {number} n 剩余楼层数
 */
const solution = (k, n) => {
  const memo = Array(k + 1)
    .fill(null)
    .map(i => Array(n + 1).fill(null));

  return solution_1(k, n, memo);
}

const solution_1 = (k, n, memo) => {
  /* 没有楼层 不需要扔 */
  if (n === 0) return 0;

  /* 只有一个 最坏就在最顶一层 从第一层扔到第n层 */
  if (k === 1) return n;

  if (memo[k][n] != null) {
    return memo[k][n];
  }

  let bestOfWorst = Infinity;
  let worstCnt;

  for (let i = 1; i <= n; i++) {
    worstCnt = Math.max(
      solution_1(k, n - i, memo), // * 没碎，剩k个蛋，剩n-i层楼
      solution_1(k - 1, i - 1, memo), // * 碎，剩k-1个蛋，剩i-1层楼
    ) + 1; // * n-i || i-1 都排除了 i, 所以要加1（本次扔）

    bestOfWorst = Math.min(bestOfWorst, worstCnt);
  }

  memo[k][n] = bestOfWorst;

  return bestOfWorst;
}

module.exports = {
  solution,
}
