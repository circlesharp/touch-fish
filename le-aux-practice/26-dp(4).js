// 4 keys keyboard

const solutionRecursive = n => {
  let memo = {};
  return dpRecursive(n, 0, 0, memo);
}

const dpRecursive = (n, screen, clipboard, memo) => {
  if (n <= 0)
    return screen;

  const key = _genKey(n, screen, clipboard);
  if (memo.hasOwnProperty(key))
    return memo[key];

  const rst = Math.max(
    dpRecursive(n - 1, screen + 1, clipboard, memo), // 直接敲击
    dpRecursive(n - 2, screen, screen, memo), // 全选 + 复制
    dpRecursive(n - 1, screen + clipboard, clipboard, memo), // 粘贴
  );
  memo[key] = rst;

  return rst;
}

const _genKey = (n, screen, clipboard) => {
  return `${n}-${screen}-${clipboard}`;
}

const solutionDP = n => {
  const dpTable = Array(n + 1);
  dpTable[0] = 0;

  let direct, copy;

  for (let i = 1; i <= n; i++) {
    // * 直接敲击
    direct = dpTable[i - 1] + 1;

    // * 粘贴
    copy = 0;
    for (let j = 4; j <= i; j++) {
      copy = Math.max(copy, dpTable[j - 3] * (i - j + 2));
    }

    dpTable[i] = Math.max(direct, copy);
  }

  return dpTable[n];
}

module.exports = {
  solutionRecursive,
  solutionDP,
};
