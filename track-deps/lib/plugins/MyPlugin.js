const fs = require('fs');
const path = require('path');
const { logPluginEvent } = require('../tools/index');

class MyPlugin {
  constructor(path) {
    this.path = path;
  }

  apply(compiler) {
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      logPluginEvent('done');

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

      MyPlugin.ToExactFileNames(deps, files);

      fs.writeFileSync(
        path.resolve(__dirname, 'deps.json'),
        JSON.stringify(deps)
      );
    });
  }

  static ToExactFileNames(deps, files) {
    for (const exactFileName of files) {
      const idx = deps.findIndex((dep) => dep.path.includes(exactFileName));
      if (idx === -1) throw Error('ToExactFileNames Error!');

      deps[idx].path = exactFileName;
    }
  }
}

module.exports = { MyPlugin };
