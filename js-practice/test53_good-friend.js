// var n = parseInt(readline());
// var ans = 0;
// for (var i = 0; i < n; i++) {
//   lines = readline().split(" ");
//   for (var j = 0; j < lines.length; j++) {
//     ans += parseInt(lines[j]);
//   }
// }
// print(ans);

// const n = 8;
// const height = [123, 124, 125, 121, 119, 122, 126, 123];

// const a = '1';
// const b = '1';
const a = '8';
const b = '123 124 125 121 119 122 126 123';

const n = parseInt(a);
const height = b.split(" ").map(i => parseInt(i));

const result = Array(n).fill(0);

for (let i = 0; i < height.length; i++) {
  for (let j = i + 1; j < height.length; j++) {
    if (height[j] > height[i]) {
      result[i] = j;
      break;
    }
  }
}

console.log(result.join(' '));
