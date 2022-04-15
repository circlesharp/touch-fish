const { formatBytes } = require('./format');

function showMemory() {
  const mem = process.memoryUsage();
  const {heapTotal, heapUsed, rss} = mem;

  console.log(`Process: heapTotal ${formatBytes(heapTotal)}, heapUsed ${formatBytes(heapUsed)}, rss ${formatBytes(rss)}`);
  console.log('-----------------------------------------------');
}

showMemory();

module.exports = {
  showMemory,
}