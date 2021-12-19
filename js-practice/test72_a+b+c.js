function solution(n, arr) {
  arr.sort((a, b) => b - a);

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] === arr[j] + 2 * arr[k]) {
          return [arr[i], arr[j], arr[k]].join(' ');
        }
      }
    }
  }

  return 0;
}

console.log(solution(4, [0, 0, 1, 5]));
