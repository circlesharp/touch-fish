const path = require('path');

const { runWorker } = require('./run-worker');

const worker = runWorker(path.join(__dirname, 'worker.js'), (err, { arr }) => {
  if (err) {
    return null;
  }

  arr[0] = 5;
});

worker.postMessage({});
