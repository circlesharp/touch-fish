/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  const len = s.length;
  const str = '#' + s + '#';
  const result = Array(len * 2 + 1).fill(0); // [1, 2, 3] => [x, x, 1, 1.5, 2, 2.5, 3]
  let longest = 1;
  let left, right, idx;
  
  for (let i = 1; i <= len; i++) {
    if (str[i - 1] !== str[i]) {
      left = i;
      right = i;
      idx = i * 2;
      result[idx] = 1;
    } else {
      left = i - 1;
      right = i;
      idx = i * 2 - 1;
      result[idx] = 2;
    }
    console.log('left', left, str[left], '  i', i, str[i], '  right', right, str[right]);
    while(true) {
      left -= 1;
      right += 1;
      if (str[left] === str[right] && str[left] !== '#') {
        result[idx] += 2;
      } else {
        longest = Math.max(longest, result[idx]);
        break;
      }
    }
  }

  console.log(longest, result);
};

longestPalindrome('aaa');
