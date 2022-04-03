const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { srcDirKeyword } = require('../configuration.js');

class DepGraphPlugin {
  constructor(path) {
    this.path = path ?? srcDirKeyword;
  }

  apply(compiler) {
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      const files = [];
      for (let depPath of stats.compilation.fileDependencies) {
        if (depPath.includes(this.path)) {
          files.push(depPath);
        }
      }

      const deps = [];
      for (const [path, module] of stats.compilation._modules) {
        if (!path.includes(this.path)) {
          continue;
        }
        const usedExports = module?.usedExports;
        const providedExports =
          module?._lastSuccessfulBuildMeta?.providedExports;
        const moduleInfo = {
          path,
          usedExports,
          providedExports,
        };
        deps.push(moduleInfo);
      }

      DepGraphPlugin.ToExactFileNames(deps, files);

      fs.writeFileSync(
        path.resolve(__dirname, '../deps.json'),
        JSON.stringify(deps)
      );
    });
  }

  static ToExactFileNames(deps, files) {
    for (const exactFileName of files) {
      const idx = deps.findIndex((dep) => dep.path.includes(exactFileName));
      if (idx === -1) {
        console.log(chalk.bgRed('Sorry:', chalk.bold.black(exactFileName)));
        continue;
      }

      deps[idx].path = exactFileName;
    }
  }
}

module.exports = { DepGraphPlugin };
