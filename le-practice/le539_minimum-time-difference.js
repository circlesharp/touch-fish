const solution = arr => {
  // 1. 转数字
  for (let i = 0; i < arr.length; i++) {
    const [hour, min] = arr[i].split(':');
    arr[i] = +hour * 60 + +min;
  }

  // 2. 排序 并处理边界
  arr.sort((a, b) => a - b);
  arr.push(arr[0] + 24 * 60);

  // 3. 临近作差 求最小值
  let min = Infinity;
  let difference;

  for (let i = 1; i < arr.length; i++) {
    difference = arr[i] - arr[i - 1];
    if (difference < min) {
      min = difference;
    }
  }

  return min;
}

const arr = ["23:59", "00:00"];

solution(arr);
