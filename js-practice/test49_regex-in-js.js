// ==========================================
// using_regular_expressions_in_javascript
// ==========================================

/**
 * RegExp.prototype.exec()
 * 
 * executes a search for a match in a specified string.
 * returns a result array, or null.
 */
(function() {
  const str1 = 'table football, foosball';
  const regex1 = /\b\w*?foo\w*?\b/g;
  // console.log(regex1.exec(str1));
  // console.log(regex1.exec(str1));

  // console.log(str1.match(regex1));
});


/**
 * RegExp.prototype.test()
 * 
 * executes a search for a match between a regular expression and a specified string.
 * returns true or false.
 */
(function() {
  const str1 = 'table football, foosball';
  const regex1 = /\b\w*?foo\w*?\b/g;
  console.log(regex1.test(str1), regex1);
});


/**
 * String.prototype.match()
 * 
 * retrieves the result of matching a string against a regular expression.
 * 
 * if the g flag is used, all results will be returned, but capturing groups will not.
 * if the g flag in not used, only the first complete match and its related capturing groups are returned.
 */
(function() {
  const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
  const regex = /[A-Z]/g;
  const found = paragraph.match(regex);

  console.log(found);
});


/**
 * String.prototype.matchAll()
 * 
 * returns an iterator of all results matching a string
 * against a regular expression, including capturing groups.
 * 
 * 1. 能避免 exec 的循环
 * 2. 能使用 for...of, array spread, Array.from
 * 3. 能得到捕获组
 * 4. 对 regexp 克隆，随着扫描，lastIndex 不会改变
 */
(function() {
  const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
  const regex = /(?<=[A-Z])(\w+)\b/g; // 要使用 g 模式
  const found = [...paragraph.matchAll(regex)]; // 返回的是 iterator，不能直接用

  console.log(found);
})();
