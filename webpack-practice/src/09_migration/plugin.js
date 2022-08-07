const fs = require('fs');
const path = require('path');

class TrackDepsPlugin {
  pluginName = 'TrackDepsPlugin';
  webpackVersion = '';
  cwd = '';
  depsInfo = [];
  options = {
    print: true,
    outputPath: './dist',
    outputFileName: 'trackDeps.json',
  };

  constructor(options = {}) {
    this.cwd = process.cwd();
    this.options = {
      ...this.options,
      ...options,
    };
  }

  apply(compiler) {
    this.webpackVersion = compiler.webpack.version;
    compiler.hooks.done.tap(this.pluginName, (stats) => {
      this.getCompatibleCb().call(this, stats);
      this.saveDepsInfo();
      if (this.options.print) {
        this.printDepsInfo();
      }
    });
  }

  // webpack 5 的方法
  cbV5(stats) {
    const getExportsInfo = stats.compilation.moduleGraph.getExportsInfo.bind(
      stats.compilation.moduleGraph
    );
    for (const module of stats.compilation.modules) {
      const moduleType = module.constructor.name;
      const path = module.resource;

      const exportsInfo = getExportsInfo(module);
      const providedExports = Array.from(exportsInfo?.exports).map(
        (exp) => exp.name
      );
      const usedExports = Array.from(exportsInfo.getUsedExports());
      this.depsInfo.push({ moduleType, path, providedExports, usedExports });
    }
  }

  // webpack 4 的方法
  cbV4(stats) {
    //
  }

  getCompatibleCb() {
    console.log(`webpack version is: ${this.webpackVersion}`);
    let cb;
    if (this.webpackVersion.startsWith('5')) {
      cb = this.cbV5;
    } else if (this.webpackVersion.startsWith('4')) {
      cb = this.cbV4;
    } else {
      throw new Error(`incompatible webpack version: ${this.webpackVersion}`);
    }

    return cb;
  }

  saveDepsInfo() {
    const p = path.resolve(
      this.cwd,
      this.options.outputPath,
      this.options.outputFileName
    );
    fs.writeFileSync(p, JSON.stringify(this.depsInfo));
  }

  printDepsInfo() {
    console.log(this.depsInfo);
  }
}

module.exports = { TrackDepsPlugin };
