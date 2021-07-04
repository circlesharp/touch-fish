const Stack = require('../utils/Stack');

const operationMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const operatorLevel = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '(': 3,
  ')': 3,
};

const solution = (expression) => {
  const RPNotion = genReversePolishNotion(expression);
  const rstStack = new Stack();

  let front, end;

  for (const item of RPNotion) {
    if (operationMap.hasOwnProperty(item)) {
      end = rstStack.pop();
      front = rstStack.pop();
      rstStack.push(operationMap[item](front, end));
    } else {
      rstStack.push(item);
    }
  }

  return rstStack.top();
};

/* 中缀表达式 => 逆波兰表达式数组 */
const genReversePolishNotion = (expression) => {
  const ntStack = new Stack();
  const opStack = new Stack();
  const expressionArr = strToArr(expression);

  let tmpOp;

  for (const item of expressionArr) {
    // * number 直接入表达式栈
    if (typeof item === 'number') {
      ntStack.push(item);
      continue;
    }

    // * 左括号 直接入符号栈
    if (item === '(') {
      opStack.push(item);
      continue;
    }

    // * 右括号 搬运符号，直到遇到左括号 (完成了子表达式)
    while (item === ')') {
      tmpOp = opStack.pop();
      if (tmpOp === '(') {
        break;
      }
      ntStack.push(tmpOp);
    }

    // * 运算符
    while (operationMap.hasOwnProperty(item)) {
      if (
        opStack.empty() ||
        opStack.top() === '(' ||
        operatorLevel[item] > operatorLevel[opStack.top()]
      ) {
        // * 直接入符号栈: 1栈空 2子表达式空(左括号) 3优先级高
        opStack.push(item);
        break;
      } else {
        // * 前一个符号入表达式栈，然后本符号再入符号栈
        tmpOp = opStack.pop();
        ntStack.push(tmpOp);
      }
    }
  }

  // * 打补丁 搬运未入表达式栈的符号
  while (!opStack.empty()) {
    tmpOp = opStack.pop();
    ntStack.push(tmpOp);
  }

  return ntStack._stack;
};

/* 转表达式字符串为数组 以便以元素为单位遍历 */
const strToArr = (expression) => {
  const stack = new Stack();

  let preIdx = 0;
  let factor;
  let operator;

  for (let i = 0; i < expression.length; i++) {
    /* 遇到符号 */
    if (operatorLevel.hasOwnProperty(expression[i])) {
      factor = expression.slice(preIdx, i).trim();
      operator = expression[i];

      factor && stack.push(+factor);
      stack.push(operator);

      preIdx = i + 1;
    }
  }

  /* 打补丁 处理最后一个因子 */
  factor = expression.slice(preIdx, expression.length).trim();
  factor && stack.push(+factor);

  return stack._stack;
};

// ======================= test =======================
const inputs = [
  ['1 + 1', 2, [1, 1, '+']],
  ['2 - 1', 1, [2, 1, '-']],
  ['3 * 3', 9, [3, 3, '*']],
  ['4 / 2', 2, [4, 2, '/']],
  ['1 + 2 * 3', 7, [1, 2, 3, '*', '+']],
  ['2 * 5 + 1 - 12 / 3', 7, [2, 5, '*', 1, '+', 12, 3, '/', '-']],
  ['1 + 2 * 3 - 4', 3, [1, 2, 3, '*', '+', 4, '-']],
  ['1+2*3+5/2*6+8', 30, [1, 2, 3, '*', '+', 5, 2, '/', 6, '*', '+', 8, '+']],
  ['(1 + 2) * 3', 9, [1, 2, '+', 3, '*']],
  ['(6 * (4 - 2)) / 3', 4, [6, 4, 2, '-', '*', 3, '/']],
];

for (const [expression, result, RPNotion] of inputs) {
  // console.log(solution(expression));
  console.log(solution(expression) === result);
}
