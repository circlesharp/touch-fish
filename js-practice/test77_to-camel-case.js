function format(name) {
  let rst = '';
  let prevChar = '';
  let curChar = '';

  for (const char of name) {
    if (isToUpper(prevChar, char)) {
      curChar = char.toUpperCase();
    } else {
      curChar = char.toLowerCase();
    }

    prevChar = char;

    if (curChar === '_') continue;

    rst += curChar;
  }

  return rst;
}

function isToUpper(prevChar, curChar) {
  if (prevChar === '_') return true;

  if (/[a-z]/.test(prevChar) && /[A-Z]/.test(curChar)) return true;
}

console.log(
  format('AA_AA')
)