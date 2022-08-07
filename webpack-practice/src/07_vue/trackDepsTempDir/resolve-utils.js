const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(unitPathSep(file));
    }
  });

  return results;
}

function unitPathSep(pathStr = '') {
  return pathStr.split(path.sep).join('/');
}

module.exports = { walk, unitPathSep };

if (require.main === module) {
  const testPath = path.resolve(__dirname, '../');
  const rst = walk(testPath);

  console.log(rst);
}
