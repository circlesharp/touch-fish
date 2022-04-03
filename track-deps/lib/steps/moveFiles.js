const { migration } = require('../tools/migration');
const { srcDirKeyword, desDirKeyword } = require('../configuration.js');
const deps = require('../deps.json');

migration(
  deps.map((i) => i.path),
  [srcDirKeyword, desDirKeyword]
);
