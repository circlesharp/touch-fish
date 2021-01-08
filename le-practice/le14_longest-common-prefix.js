/**
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  const prefixs = [''];
  /* 字符串数组的长度 */
  const strsLen = strs.length;

  /* 第一个单词的长度 */
  const firstWord = strs[0];
  if (!firstWord) return '';
  const wordLen = firstWord.length;

  /* j 单词的索引 */
  for (let j = 0; j < wordLen; j++) {
    const char = firstWord[j];

    /* i 单词中字符的索引 */
    for (let i = 1; i < strsLen; i++) {
      if (strs[i][j] == null || strs[i][j] !== char)
        return prefixs.join('');
    }
    prefixs.push(char);
  }
  return prefixs.join('');
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
