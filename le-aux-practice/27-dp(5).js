/**
 * 1~n floor, n eggs, f floor.
 * 最坏情况下，至少要扔几次，才能确定 f
 * @param {number} k nums of eggs left
 * @param {number} n nums of floor left
 */
const solution = (k, n) => {
  if (n === 0) return 0;
  if (k === 1) return n;

  let rst = Infinity;

  for (let i = 0; i < n; i++) {
    // * 最坏情况下的最少扔鸡蛋数
    rst = Math.min(
      rst,
      Math.max(
        solution(k, n - i),
        solution(k - 1, n),
      ) + 1,
    );
  }

  return rst;
}
