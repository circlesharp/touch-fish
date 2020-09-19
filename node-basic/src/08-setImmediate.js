/*
::: setImmediate :::
nextTick, Job Queue, setTimeout 0 / setImmediate

A setTimeout callback with a 0ms delay is vary similar to setImmediate.
They will be both run in the next iteration of the event loop.
*/

const timeout = () => console.log('timeout');

const immediate = () => console.log('immediate');

const nextTick = () => console.log('nextTick');

const fuck = () => {
  setImmediate(immediate);
  setTimeout(timeout, 0);
  new Promise((resolve, reject) => {
    resolve('ES6 Job Queue!');
  }).then(console.log);
  process.nextTick(nextTick);
}

fuck();
