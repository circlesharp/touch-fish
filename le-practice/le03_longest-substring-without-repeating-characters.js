/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let maxLength = 0;
  let tempIdx = 0;
  let subStr = '';
  for (let i = 0; i < s.length; i++) {
    tempIdx = subStr.indexOf(s[i]);
    if (tempIdx !== -1) {
      maxLength = Math.max(maxLength, subStr.length);
      subStr = subStr.slice(tempIdx + 1);
    }
    subStr += s[i];      
  }
  /* 边界情况 */
  maxLength = Math.max(maxLength, subStr.length);
  return maxLength;
};

console.log(lengthOfLongestSubstring(" "))
