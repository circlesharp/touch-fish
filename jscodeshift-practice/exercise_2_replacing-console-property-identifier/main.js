const path = require('path');
const { run: jscodeshift } = require('jscodeshift/src/Runner');

const transformPath = path.resolve(__dirname, 'transform.js');
const paths = ['../src/source.ts'];

const options = {
  dry: true,
  print: true,
  replaceRules: {
    warn: 'fuck',
    error: 'damn',
  },
};

jscodeshift(transformPath, paths, options);
