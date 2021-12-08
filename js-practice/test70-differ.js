var A = [1, 5, 6];
var B = [2, 6, 7];

function solve(arrA, arrB) {
  const map = {};
  const rst = [];
  for (let item of arrA) {
    map[item] = map[item] ? map[item] : 0;
    map[item] += 1;
  }
  for (let item of arrB) {
    map[item] = map[item] ? map[item] : 0;
    map[item] += 1;
  }

  for (let item in map) {
    if (map[item] === 1) {
      rst.push(item);
    }
  }

  console.log(rst, map);
  return rst;
}

solve(A, B);
