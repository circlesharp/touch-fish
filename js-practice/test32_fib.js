/* DP - 斐波那契数列 */
/* Those who cannot remember the past are condemned to repeat it. */

const FIB_10 = 55;
const FIB_35 = 9227465;

/* 1. 自顶向下的备忘录法 */
{
  const size = 100;
  const fibs = Array(size + 1).fill(null);

  const fib = n => {
    if (fibs[n]) return fibs[n];

    if (n <= 2)
      fibs[n] = 1;
    else
      fibs[n] = fib(n - 2) + fib(n - 1);

    return fibs[n];
  }

  console.log(fib(10) === FIB_10);
  console.log(fib(35) === FIB_35);
}

/* 2. 自底向上的动态规划 */
{
  const fib = n => {
    if (n <= 2) return 1;

    /* M means minus */
    let fibM2 = 1;
    let fibM1 = 1;
    let temp;
    
    for (let i = 3; i <= n; i++) {
      temp = fibM1;
      fibM1 += fibM2;
      fibM2 = temp;
    }

    return fibM1;
  }

  console.log(fib(10) === FIB_10);
  console.log(fib(35) === FIB_35);
}
