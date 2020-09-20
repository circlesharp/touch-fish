const path = require('path');

const print = (...args) =>
  console.log(args.join('\n'), '\n---------\n');

/* 
Getting information out of a path
*/
const notes = '/users/joe/notes.txt';
print(
  path.dirname(notes),
  path.basename(notes),
  path.extname(notes),
  path.basename(notes, path.extname(notes)),
);

/*
Working with paths

Both resolve and normalize will not check if the path exists.
They just calculate a path based on the information they got.
*/
print(
  path.join('/', 'ext', 'nginx', 'nginx.config'),
  path.resolve('test'),
  path.resolve('fuck', 'you.mp4'),
  path.resolve('/etc', 'you.mp4'), // start with a slash, an absolute path
  path.normalize('/users/joe/123/..//test.txt'),
  __dirname,
  __filename,
  path.resolve(__dirname, '../package.json'),
);
