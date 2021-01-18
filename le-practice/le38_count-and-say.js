/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  if (n === 1) return '1';

  let rst = '';
  let cnt = 0;
  let cur = '';
  const preRst = countAndSay(n - 1).split('');
  const len = preRst.length;

  for (let i = 0; i < len; i++) {
    let val = preRst.shift();
    if (val === cur) {
      cnt++;
    } else {
      if (cnt > 0)
        rst += `${cnt}${cur}`;
      cnt = 1;
      cur = val;
    }
  }

  rst += `${cnt}${cur}`;

  return rst;
};

for (let i = 1; i <= 10; i++)
  console.log(countAndSay(i));

// console.log(countAndSay(3));
