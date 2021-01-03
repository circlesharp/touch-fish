/* DP - 钢条切割 p: 钢条长度对应的售价 n: 钢条的长度 */

// const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

// length 1 2 3 4 5 6
// price  1 5 8 9 10 17
const prices = [0, 1, 5, 8, 9, 10, 17];

/* 1 递归版本 */
{
  const cut = (p, n) => {
    if (n === 0) return 0;

    let q = -Infinity;
    for (let i = 1; i <= n && i < p.length; i++)
      q = Math.max(q, p[i] + cut(p, n - i));
    
    return q;
  };
  
  // console.log(cut(prices, 5)); // 13: 2/3
  // console.log(cut(prices, 8)); // 22: 2/6
  // console.log(cut(prices, 9)); // 25: 3/6
}

/* 1.5 递归版本-备忘录版本 */
{
  const r = Array(prices.length).fill(0);
  const memoizedCut = (pro, r, n) => {
    if (r[n] > 0) return r[n];
    let profit = 0;
    for (let i = 1; i <= n && i < pro.length; i++)
      profit = Math.max(profit, pro[i] + memoizedCut(pro, r, n - i));
    
    r[n] = profit;
    return profit;
  };

  // console.log(memoizedCut(prices, r, 5)); // 13: 2/3
  // console.log(memoizedCut(prices, r, 8)); // 22: 2/6
  // console.log(memoizedCut(prices, r, 9)); // 25: 3/6
  // console.log(memoizedCut(prices, r, 40));
}

/* 自底向上的动态规划 */
{
  const bottomUpCut = (p, n) => {
    const r = Array(n+1).fill(0);

    for (let j = 1; j <= n; j++) {
      let q = -Infinity;

      /* < p.length 的限制要放在这里，因为这里才是从 p 取值 */
      for (let i = 1; i <= j  && i < p.length; i++)
        q = Math.max(q, p[i] + r[j - i]);

      r[j] = q;
    }
    // console.log(p, r);
    return r[n];
  };

  console.log(bottomUpCut(prices, 5)); // 13: 2/3
  console.log(bottomUpCut(prices, 8)); // 22: 2/6
  console.log(bottomUpCut(prices, 9)); // 25: 3/6
}
