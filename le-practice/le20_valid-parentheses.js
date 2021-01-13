/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  /* 奇数长度 不是 */
  if (s.length % 2)
    return false;

  const Stack = [];
  let top = -1;
  for (let i = 0; i < s.length; i++) {
    /* js 里，数组没有该索引不报错，返回 undefined */
    if (isMatch(Stack[top], s[i])) {
      Stack.pop();
      top -= 1;
    } else {
      Stack.push(s[i]);
      top += 1;
    }
  }

  return top === -1;
};

const isMatch = (left, right) => {
  return (
    left === '(' && right === ')'
    || left === '[' && right === ']'
    || left === '{' && right === '}'
  );
};

console.log(isValid('{}'));
// console.log(isMatch('{', '}'));
