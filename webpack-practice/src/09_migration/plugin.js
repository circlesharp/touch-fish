class FileListPlugin {
  apply(compiler) {
    const { webpack } = compiler;

    // Compilation 对象提供了对一些有用常量的访问。
    const { Compilation } = webpack;

    // RawSource 是其中一种 “源码”("sources") 类型，
    // 用来在 compilation 中表示资源的源码
    const { RawSource } = webpack.sources;

    // 指定一个挂载到 compilation 的钩子，回调函数的参数为 compilation 。
    compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
      // 现在可以通过 compilation 对象绑定各种钩子
      console.log('step 1');
      compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
        console.log('资源已经优化完毕。');
      });
    });
  }
}

module.exports = { FileListPlugin };
