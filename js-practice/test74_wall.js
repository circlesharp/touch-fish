function solution(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;

  let rst = helper(arr, 0, n - 2, arr[n - 1]);
  if (rst === -1) {
    rst = helper(arr, 1, n - 2, arr[n - 1] + arr[0]);
  }

  return rst;
}

function helper(arr, l, r, wallLength) {
  let layer = 1;
  let left = l;
  let right = r;

  while (left <= right && arr[right] === wallLength) {
    right -= 1;
    layer += 1;
  }

  while (left < right && arr[left] + arr[right] === wallLength) {
    left += 1;
    right -= 1;
    layer += 1;
  }

  return right < left ? layer : -1;
}

console.log(solution([3, 3, 1, 5, 6, 6, 6, 6, 6]));
