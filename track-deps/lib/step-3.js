const path = require('path');
const { run: jscodeshift } = require('jscodeshift/src/Runner');
const deps = require('./plugins/deps.json');
const { mapDeps } = require('./tools/mapDeps');

const transformPath = path.resolve(__dirname, './tools/transform.js');
const depsInfo = mapDeps(deps, ['components', 'business_components']);

const paths = depsInfo.map((i) => i.migratedPath);

const options = {
  print: true,
  verbose: 1,
  parser: 'ts',
  depsInfo,
};

jscodeshift(transformPath, paths, options);
