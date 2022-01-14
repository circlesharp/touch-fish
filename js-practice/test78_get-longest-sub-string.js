function findLongestSubstr(str) {
  // write code here
  if (!str.length) return '';

  const dp = [{ start: 0, cnt: 1 }];

  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    if (char === str[i - 1]) {
      dp[i] = {
        start: dp[i - 1].start,
        cnt: dp[i - 1].cnt + 1,
      }
    } else {
      dp[i] = {
        start: i,
        cnt: 1,
      }
    }
  }

  let maxCnt = 1;
  let maxIdx = 0;
  for (let i = 0; i < str.length; i++) {
    if (dp[i].cnt > maxCnt) {
      maxCnt = dp[i].cnt;
      maxIdx = i;
    }
  }

  return str.slice(dp[maxIdx].start, dp[maxIdx].start + maxCnt);
}


console.log(
  findLongestSubstr('1122')
)