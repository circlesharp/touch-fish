const fs = require('fs');

/*
1. 指定编码
2. Both read the full content of the file in memory before returning data.
*/
fs.readFile('test', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`async\n${data}`);
});

try {
  const data = fs.readFileSync('test', 'utf-8');
  console.log(`sync\n${data}`);
} catch(err) {
  console.error(err);
}
