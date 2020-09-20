const fs = require('fs');

fs.stat('test', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  const isFile = stats.isFile();
  const isDirectory = stats.isDirectory();
  const isSymbolicLink = stats.isSymbolicLink();
  const size = stats.size;

  const info = { isFile, isDirectory, isSymbolicLink, size };
  process.emit('statInfo', info);
});

process.on('statInfo', console.log);
