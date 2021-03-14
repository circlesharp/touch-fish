// a = 'D G G';
// b = '3 3';
// c = 'F F F';
// d = 'F F H';
// e = 'E F E';
// a = 'G G D G R G G U G G L G G D G R G U G';
a = 'R G';
b = '3 3';
c = 'F F F';
d = 'E E H';
e = 'E F F';
reline = [c, d, e];

const HEAD = 'H';
const FOOD = 'F';
const EMPTY = 'E';
const BODY = 'B';

const MOVE = {
  U() {
    return [snake[0][0] - 1, snake[0][1]];
  },
  D() {
    return [snake[0][0] + 1, snake[0][1]];
  },
  L() {
    return [snake[0][0], snake[0][1] - 1];
  },
  R() {
    return [snake[0][0], snake[0][1] + 1];
  },
};

let direction = 'L';
const snake = [];
const head = { row: null, col: null };

const operators = a.split(' ');
const [row, col] = b.split(' ');
const gameBoard = Array(row);
for (let i = 0; i < row; i++) {
  gameBoard[i] = reline[i].split(' ');
  if (gameBoard[i].includes(HEAD)) {
    snake.unshift([i, gameBoard[i].findIndex(block => block === HEAD)]);
  }
}


// 操作
for (let i = 0; i < operators.length; i++) {
  // console.log(gameBoard);
  const operate = operators[i];

  // 改变方向
  if (MOVE[operate] != null) {
    direction = operate;
  }

  // 移动
  else {
    const newHead = MOVE[direction]();
    const newHeadContent = gameBoard[newHead[0]] && gameBoard[newHead[0]][newHead[1]];
    const oldTail = snake[snake.length - 1];
    console.log(direction, newHead, newHeadContent);
    if (newHeadContent === FOOD) {
      // 食物
      snake.unshift(newHead);
      gameBoard[newHead[0]][newHead[1]] = HEAD;
    } else if (newHeadContent === EMPTY || (newHead[0] === oldTail[0] && newHead[1] === oldTail[1])) {
      // 空格
      snake.unshift(newHead);
      const newEmpty = snake.pop();
      gameBoard[newHead[0]][newHead[1]] = HEAD;
      gameBoard[newEmpty[0]][newEmpty[1]] = EMPTY;
    } else {
      // 自己或边界
      // if  {

      // }
      break;
    }
  }
}

console.log(snake.length);
