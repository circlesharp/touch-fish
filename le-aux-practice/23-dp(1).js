/**
 * * 3 elements of DP:
 * 1. 重叠子问题 => memo || dpTable
 * 2. 最优子结构 => 子问题间相对独立
 * 3. 状态转移方程 => 本质就是暴力解法
 *  3.1 明确状态
 *  3.2 定义 dpTable / dpFunction 的含义
 *  3.3 明确选择
 *  3.4 明确 base case
 */

/* 1. 重叠子问题 通过 dpTable 解决 */
/* 2. 最优子结构 无 因为不是求最值 */
/* 3. dpFunction: dp(n) = dp(n-1) + dp(n-2), n>2; 1, n<=2; */
const fabDP = n => {
  const dpTable = Array(n + 1).fill(0);
  dpTable[1] = 1;
  dpTable[2] = 1;

  for (let i = 3; i <= n; i++) {
    dpTable[i] = dpTable[i - 2] + dpTable[i - 1];
  }

  return dpTable[n];
}


/**
 * 3. deFunction: dp(n) =
 *  0, n=0;
 *  undefined, n<0;
 *  1+min{dp(n-coin)}, n > 0, coin in coins;
 */
const changesDP = (coins, target) => {
  const dpTable = Array(target + 1);
  dpTable[0] = 0;
  let min;
  for (let i = 1; i <= target; i++) {

    // ? 可以这么优化，但意义不是特别大
    // ? dpTable[i] = min(dpTable[i], 1 + dpTable[i - coin])

    min = Infinity;
    for (const coin of coins) {
      if (dpTable[i - coin] != null && dpTable[i - coin] < min) {
        min = dpTable[i - coin];
      }
    }
    dpTable[i] = min + 1;
  }

  return dpTable[target];
}

module.exports = {
  fabDP,
  changesDP,
};
