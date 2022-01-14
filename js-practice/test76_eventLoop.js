// 2 -> 3 -> 1

new Promise(resolve => {
  setTimeout(() => {
    console.log(1);
  }, 0)

  console.log(2);

  resolve()
}).then(() => {
  console.log(3);
})