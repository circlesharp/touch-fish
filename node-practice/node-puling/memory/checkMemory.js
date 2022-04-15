const os = require('os');
const { formatBytes } = require('./format');

console.log(`totalMem: ${formatBytes(os.totalmem())}, freeMem: ${formatBytes(os.freemem())}`)
