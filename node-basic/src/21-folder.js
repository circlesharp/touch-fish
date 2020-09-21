const fs = require('fs');
const path = require('path');

// const folderName = path.join(__dirname, 'testFolder');
const folderName = 'testFolder';

/* check if the folder exists and Node.js can access it with its permissions. */
// fs.access('test', console.log)

/*
mkdir, mkdirSync
*/
try {
  if (!fs.existsSync(folderName)) {
    // fs.mkdirSync(folderName);
  } 
} catch (err) {
  console.error(err);
}

/*
readdir, readdirSync
*/
const thisFold = path.resolve('../', 'src');
const rst = fs.readdirSync(thisFold)
  .map(fileName => path.join(thisFold, fileName))
  .filter(fileName => fs.lstatSync(fileName).isFile());

/*
Rename a folder
*/
// fs.rename('test', 'newTest', console.error);

/*
Remove a folder
1. fs.rmdir, fs.rmdirSync
2. fs-extra (callback, promise, async)
*/
const fse = require('fs-extra');
fse.remove('newTest').then(console.log, console.error);
