const path = require('path');
const { run: jscodeshift } = require('jscodeshift/src/Runner');

const transformPath = path.resolve(__dirname, 'transform.js');
// const paths = ['test1.ts'];
// const paths = ['test2.ts'];
const paths = ['../src/source.ts'];

const options = {
  dry: true,
  print: true,
  parser: 'ts',
};

jscodeshift(transformPath, paths, options);
