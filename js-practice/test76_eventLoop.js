// 2,8,4,5,3,6,7,1

new Promise(resolve => {
  setTimeout(() => {
    console.log(1);
  }, 0)

  console.log(2);
  process.nextTick(() => console.log(4));

  resolve()
  console.log(8)
  process.nextTick(() => console.log(5));
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(6);
  process.nextTick(() => console.log(7));
})