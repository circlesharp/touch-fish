/**
 * 回文数
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  const str = x.toString();
  const len = str.length;
  for (let i = 0; i < len / 2 | 0; i++) {
    if (str[i] !== str[len - 1 - i])
      return false;
  }
  return true;
};

console.log(isPalindrome('1245421'));
