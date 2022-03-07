const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function getFilePath(file) {
  const postfix = 'js';
  const indexName = 'index.js';

  if (fs.existsSync(file)) {
    return file;
  } else if (fs.existsSync(`${file}.${postfix}`)) {
    return `${file}.${postfix}`;
  } else if (fs.existsSync(`${file}/${indexName}`)) {
    return `${file}/${indexName}`;
  }
}

const getModuleInfo = (rawFile) => {
  const file = getFilePath(rawFile);
  const body = fs.readFileSync(file, 'utf-8');
  const ast = parser.parse(body, {
    sourceType: 'module',
  });

  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file);
      const abspath = './' + path.join(dirname, node.source.value);
      deps[node.source.value] = abspath;
    },
  });

  const { code } = babel.transformFromAst(ast, null, {});

  const moduleInfo = { file, deps, code };

  return moduleInfo;
};

const parseModules = (file) => {
  const entry = getModuleInfo(file);
  const temp = [entry];
  for (const i of temp) {
    const { deps } = i;
    for (const key in deps) {
      if (deps.hasOwnProperty(key)) {
        temp.push(getModuleInfo(deps[key]));
      }
    }
  }
};

parseModules('./app');

// handleFilePath('./app.js');
