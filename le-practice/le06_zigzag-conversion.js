/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1)
    return s;

  const rst = [];
  for (let i = 0; i < numRows; i++)
    rst.push(new Array());
  const tickCapacity = numRows * 2 - 2;
  const tick = Math.max(s.length / tickCapacity);
  let row = 0, col = 0, i = 0;

  for (let t = 0; t < tick; t++, col++) {
    for (row = 0; row < numRows; row++)
      rst[row][col] = s[i++];
    for (row = numRows - 2; row > 0; row--)
      rst[row][++col] = s[i++];
  }

  let str = '';
  rst.forEach(row => {
    str += row.join('');
  })
  return str;
};

console.log(convert('abcdefghijklmn', 4));
