/*
* 编写函数sum
* sum(1)(2).count() // 3
* sum(1)(2)(3).count() // 6
*/

function sum(...factor) {
  const args = [];
  
  function add(...f) {
    if (!f.length) {
      return add.count();
    }

    args.push(...f);
    return add;
  }
  
  function count() {
    return args.reduce((t, r) => t + r, 0);
  }

  add.count = count;
  
  args.push(...factor);
  return add;
}

console.log(sum(1)(2).count()); // 3
console.log(sum(1)(2)(3).count()); // 6
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1,2,3)(4,5,6).count()); // 6
console.log(sum(1,2,3)(4,5,6)()); // 6