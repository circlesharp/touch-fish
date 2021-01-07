/**
 * 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const len = s.length;
  let rst = 0;

  for (let i = 0; i < len; i++) {
    const item = s[i];
    const next = s[i + 1];
    
    if (i === len - 1)
      return rst + dict[item];

    if (dict[item] < dict[next])
      rst -= dict[item];
    else
      rst += dict[item];
  }
  
  return rst;
};

console.log(romanToInt('IV'));
