const fs = require('fs');
const path = require('path');
const { walk, unitPathSep } = require('./resolve-utils');

class TrackDepsPlugin {
  pluginName = 'TrackDepsPlugin';
  webpackVersion = '';
  cwd = '';
  targetDir = '';
  exportsInfo = [];
  filesInfo = {
    allFiles: [], // 目标路径的所有文件
    unusedFiles: [], // 被 webpack 纳入依赖图的文件
    extraPathsOfWebpack: [], // 额外的路径, webpack 的额外产物
  };

  options = {
    print: false,
    targetDir: './src',
    outputDir: './dist',
    outputFileName: 'trackDepsReport.json',
  };

  constructor(options = {}) {
    this.cwd = process.cwd();
    this.options = {
      ...this.options,
      ...options,
    };
    this.targetDir = unitPathSep(
      path.resolve(this.cwd, this.options.targetDir)
    );
  }

  apply(compiler) {
    this.webpackVersion = compiler.webpack?.version || '4';
    compiler.hooks.done.tap(this.pluginName, (stats) => {
      this.getExportsInfoCb().call(this, stats);

      this.getUnusedFiles();

      if (this.options.print) {
        this.print();
      }

      this.save();
    });
  }

  // webpack 5 的方法
  cbV5(stats) {
    const getExportsInfo = stats.compilation.moduleGraph.getExportsInfo.bind(
      stats.compilation.moduleGraph
    );
    for (const module of stats.compilation.modules) {
      const path = unitPathSep(module.resource);
      if (!path.includes(this.targetDir)) continue;

      const moduleType = module.constructor.name;
      const exportsInfo = getExportsInfo(module);
      const providedExports = Array.from(exportsInfo?.exports).map(
        (exp) => exp.name
      );
      const usedExports = Array.from(exportsInfo.getUsedExports());
      this.exportsInfo.push({ moduleType, path, providedExports, usedExports });
    }
  }

  // webpack 4 的方法
  cbV4(stats) {
    for (const module of stats.compilation.modules) {
      const path = unitPathSep(module?.resource);
      if (!path.includes(this.targetDir)) continue;

      const providedExports = module?.buildMeta?.providedExports;
      const usedExports = module?.usedExports;
      this.exportsInfo.push({ path, providedExports, usedExports });
    }
  }

  getExportsInfoCb() {
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

  getUnusedFiles() {
    const allFiles = walk(this.targetDir);
    const usedFilesOfWebpack = this.exportsInfo.map((i) => i.path);
    const unusedFiles = allFiles.filter(
      (i) => !usedFilesOfWebpack.some((k) => k.includes(i))
    );
    const extraPathsOfWebpack = usedFilesOfWebpack.filter(
      (i) => !allFiles.includes(i)
    );

    this.filesInfo.allFiles = allFiles;
    this.filesInfo.unusedFiles = unusedFiles;
    this.filesInfo.extraPathsOfWebpack = extraPathsOfWebpack;
  }

  save() {
    const outputPath = path.resolve(
      this.cwd,
      this.options.outputDir,
      this.options.outputFileName
    );
    const content = {
      conclusion: {
        targetDir: this.targetDir,
        allFiles: this.filesInfo.allFiles.length,
        unusedFiles: this.filesInfo.unusedFiles.length,
        extraPathsOfWebpack: this.filesInfo.extraPathsOfWebpack.length,
        exportsInfo: this.exportsInfo.length,
      },
      detail: {
        allFiles: this.filesInfo.allFiles,
        unusedFiles: this.filesInfo.unusedFiles,
        extraPathsOfWebpack: this.filesInfo.extraPathsOfWebpack,
        exportsInfo: this.exportsInfo,
      },
    };
    fs.writeFileSync(outputPath, JSON.stringify(content));
  }

  print() {
    console.log(this.exportsInfo);
  }
}

module.exports = { TrackDepsPlugin };
