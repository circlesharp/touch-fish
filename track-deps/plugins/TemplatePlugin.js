const fs = require('fs');
const path = require('path');
const { logPluginEvent } = require('../tools/index');

class TemplatePlugin {
  constructor(path) {
    this.path = path;
  }

  apply(compiler) {
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      logPluginEvent('done');
      const deps = [];
      for (let depPath of stats.compilation.fileDependencies) {
        if (depPath.includes(this.path)) {
          deps.push(depPath);
        }
      }
      fs.writeFileSync(
        path.resolve(__dirname, 'depsPath.json'),
        JSON.stringify(deps)
      );
    });
  }
}

module.exports = { TemplatePlugin };
