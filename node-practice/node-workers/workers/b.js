const { parentPort, workerData } = require('worker_threads');

const { fab } = require('./fab');

parentPort.postMessage(fab(workerData.num));
