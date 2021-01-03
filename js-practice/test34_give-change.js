/* DP - 找零钱 */

const options = [1, 2, 5];

const giveChange = (p, n) => {
  const minTimes = [0];
  const resolves = [0];

  /* j 要找的钱，自底向上 */
  for (let j = 1; j <= n; j++) {
    let t = Infinity;

    /* i 零钱选项的 idx */
    for (let i = p.length - 1; i >= 0; i--) {
      if (p[i] > j) continue;

      const tempT = minTimes[j - p[i]] + 1;
      if (tempT < t) {
        t = tempT;
        minTimes[j] = t;
        resolves[j] = p[i];
      }
    }
  }

  return [minTimes[n], resolves];
};

const wrapGiveChange = (p, n) => {
  const [time, resolve] = giveChange(p, n);
  let amount = n;
  let step = [];
  while(amount) {
    step.push(resolve[amount]);
    amount -= resolve[amount];
  }
  console.log(`${n}: ${time}, ${step.join('/')}`);
}

for (let i = 1; i <= 30; i += 3)
  wrapGiveChange(options, i);
