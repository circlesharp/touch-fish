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
      // for (let depPath of stats.compilation.fileDependencies) {
      //   if (depPath.includes(this.path)) {
      //     deps.push(depPath);
      //   }
      // }

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

      fs.writeFileSync(
        path.resolve(__dirname, 'depsPath.json'),
        JSON.stringify(deps)
      );
    });
  }
}

module.exports = { TemplatePlugin };
