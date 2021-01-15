/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
{
  const strStr = (haystack, needle) => {
    const longLength = haystack.length;
    const shortLength = needle.length;
    if (shortLength === 0)
      return 0;
    for (let i = 0; i <= longLength - shortLength; i++) {
      if (haystack.slice(i, i + shortLength) === needle)
        return i;
    }
    return -1;
  };

  strStr('hello', 'll');
}

{
  // kmp算法
  // https://blog.csdn.net/dark_cy/article/details/88698736
}
