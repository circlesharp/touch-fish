class FileListPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      // webpack 5 的方法
      const getExportsInfo = stats.compilation.moduleGraph.getExportsInfo.bind(
        stats.compilation.moduleGraph
      );
      for (let module of stats.compilation.modules) {
        const moduleType = module.constructor.name;
        const path = module.resource;

        const exportsInfo = getExportsInfo(module);
        const providedExports = Array.from(exportsInfo?.exports).map(
          (exp) => exp.name
        );
        const usedExports = Array.from(exportsInfo.getUsedExports());

        console.log(moduleType, path, providedExports, usedExports);
      }
    });
  }
}

module.exports = { FileListPlugin };
