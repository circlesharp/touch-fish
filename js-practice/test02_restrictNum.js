const existy = n =>
  n!= null;

const restrictNum = (num, left, right) => {
  let restrictedNum = num;
  if (existy(left)) restrictedNum = Math.max(left, restrictedNum);
  if (existy(right)) restrictedNum = Math.min(right, restrictedNum);
  return restrictedNum;
}

console.log(
  restrictNum(2, 3, 4),
  restrictNum(5, 3, 4),
  restrictNum(3.5, 3, 2),
)
