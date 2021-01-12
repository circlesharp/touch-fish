/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  const len = s.length;
  const str = '#' + s + '@';
  /* .5 表示偶数组合，中间两个也回文 [1, 2, 3] => [x, x, 1, 1.5, 2, 2.5, 3] */
  const result = Array(len * 2 + 1).fill(0);
  let longest = 1, longestIdx = 2;
  let left, right, i;
  
  for (let j = 2; j <= len * 2; j++) {
    i = Math.ceil(j / 2);
    if (j % 2 && str[i - 1] === str[i]) {
      left = i - 1;
      right = i;
      idx = i * 2 - 1;
      result[idx] = 2;
    } else {
      left = i;
      right = i;
      idx = i * 2;
      result[idx] = 1;
    }
    while(true) {
      left -= 1;
      right += 1;
      if (str[left] === str[right]) {
        result[idx] += 2;
      } else {
        if (result[idx] > longest) {
          longest = result[idx];
          longestIdx = idx;
        }
        break;
      }
    }
  }

  let start;
  if (longestIdx % 2) {
    start = Math.ceil(longestIdx / 2) - longest / 2;
  } else {
    start = longestIdx / 2 - (longest / 2 | 0);
  }
  
  return str.slice(start, start + longest);
};

console.log(longestPalindrome('aa'));
