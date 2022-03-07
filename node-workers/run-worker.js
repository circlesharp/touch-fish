const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');

function runWorker(path, cb, workerData) {
  const worker = new Worker(path, { workerData });

  worker.on('message', cb.bind(null, null));

  worker.on('error', cb);

  worker.on('exit', (exitCode) => {
    if (exitCode === 0) {
      return null;
    }

    return cb(new Error(`Worker has stopped with code ${exitCode}`));
  });

  return worker;
}

parentPort.on('message', () => {
  const numberOfElements = 100;
  const sharedBuffer = new SharedArrayBuffer(
    Int32Array.BYTES_PER_ELEMENT * numberOfElements
  );
  const arr = new Int32Array(sharedBuffer);

  for (let i = 0; i < numberOfElements; i++) {
    arr[i] = Math.round(Math.random() * 30);
  }

  parentPort.postMessage({ arr });
});

module.exports = { runWorker };
