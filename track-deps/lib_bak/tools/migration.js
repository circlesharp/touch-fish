const path = require('path');
const fs = require('fs');

function migration(srcPaths, [srcDirKeyword, desDirKeyword]) {
  for (const filePath of srcPaths) {
    const targetPath = filePath.replace(srcDirKeyword, desDirKeyword);
    copyFile(filePath, targetPath);
  }
}

function copyFile(from, to) {
  const toDir = path.dirname(to);

  if (!fs.existsSync(toDir)) {
    fs.mkdirSync(toDir, { recursive: true });
  }

  fs.copyFile(from, to, (err) => {
    if (err) throw err;
  });
}

module.exports = { migration };
