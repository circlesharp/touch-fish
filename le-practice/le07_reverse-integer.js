/**
 * 整数反转
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  /* 1 判断符号 */
  const isNegative = x < 0;

  /* 2 翻转字符串 */
  const str = x.toString();
  const len = str.length;
  const reservedArr = Array(len);
  for (let i = 0; i < len; i++) {
    reservedArr[i] = str[len - 1 - i];
  }

  /* 3 转化为有符号数 */
  let rst = parseInt(reservedArr.join(''));
  if (isNegative) rst /= -1 | 0;

  /* 4 处理溢出 */
  if (rst < -(2 ** 31) || rst > (2 ** 31 - 1))
    rst = 0;

  return rst;
};

console.log(reverse(1534236469));

