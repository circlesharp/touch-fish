const KEY = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

const solution = (group, preRst) => {
  if (preRst.length === 0)
    return Array.from(group); // 副本，否则会改掉 KEY 字典

  const rst = [];
  let prefixStr;
  while(preRst.length > 0) {
    prefixStr = preRst.shift();
    group.forEach(char => {
      rst.push(`${prefixStr}${char}`)
    });
  }

  return rst;
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  const digitArr = digits.split('').filter(key => !!KEY[key]);
  let rst = [];

  digitArr.forEach(key => {
    rst = solution(KEY[key], rst);
  });

  return rst;
};

console.log(letterCombinations('23').length, 9);
console.log(letterCombinations('0').length, 0);
console.log(letterCombinations('2').length, 3);
