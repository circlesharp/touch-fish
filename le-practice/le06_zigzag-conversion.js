/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert_silly = (s, numRows) => {
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

const convert = (s, numRows) => {
  if (numRows === 1)
    return s;

  const rstArr = Array(numRows).fill('');
  const tickCapacity = numRows * 2 - 2;
  const tick = Math.max(s.length / tickCapacity);
  let row, idx = 0;
  
  for (let t = 0; t < tick; t++) {
    for (row = 0; row < numRows; row++)
      rstArr[row] += s[idx++] || '';
    for (row = numRows - 2; row > 0; row--)
      rstArr[row] += s[idx++] || '';
  }
  
  return rstArr.join('');
}

console.log(convert_silly('abcdefghijklmn', 5));
console.log(convert('abcdefghijklmn', 5));
