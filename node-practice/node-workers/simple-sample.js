const path = require('path');
const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  const nums = [51, 48, 50];
  const subDir = 'workers';
  for (let num of nums) {
    const worker = new Worker(path.resolve(__dirname, subDir, 'a.js'), {
      workerData: { num },
    });
    worker.once('message', (result) => {
      console.log(`The result of fab(${num}) is:`, result);
    });
  }
}
