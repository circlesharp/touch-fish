import chalk from 'chalk';

export default function myExample() {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    resolveId(source) {
      console.log(chalk.bgRed(source));
      if (source === 'virtual-module') {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load(id) {
      console.log(chalk.bgBlue(id));
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    },
    transform(code, id) {
      console.log(chalk.bgGreen(id), code);
    },
    renderChunk(code, chunk, options) {
      for (const moduleKey in chunk.modules) {
        console.log(
          chalk.bgCyan(moduleKey),
          chunk.modules[moduleKey].removedExports
        );
      }
    },
  };
}
