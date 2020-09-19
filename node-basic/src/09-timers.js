/*
::: setTimeout :::

1. setTimeout(fun, time, ...params)
2. timer id
3. zero delay ~ setImmediate
*/
const id = setTimeout(console.log, 1000, 1, 2, 3);
clearTimeout(id);

/*
::: setInterval :::

1. It's common to call clearInterval inside the setInterval callback function
2. replaced by ::: recursive setTimeout ::: (但不能简单地这样处理，在异步的时候，要改造)
*/
// const recursiveSetTimeout = (fun, interval) => {
//   const inner = () => {
//     fun();
//     setTimeout(inner, interval);
//   };
//   setTimeout(inner, interval);
// };

const testPromise = timeout =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, timeout, timeout / 1000);
  });

/*
const test = async () => {
  console.log('a');
  await testPromise(2000).then(console.log)
  setTimeout(console.log, 0, 'timeout')
  console.log('b');
}; */

const inner = async () => {
  const randomWait = Math.random() * 5000;
  console.log(`now, waiting for ${randomWait / 1000} second.`)
  await testPromise(randomWait).then(console.log);
  console.log('now, waiting for 2 second.')
  setTimeout(inner, 2000);
};
setTimeout(inner, 2000);

/*
setInterval(async () => {
  const randomWait = Math.random() * 5000;
  console.log(`now, waiting for ${randomWait / 1000} second.`)
  await testPromise(randomWait).then(console.log);
  console.log('now, waiting for 2 second.')
}, 2000); */
