export default function gatherRemovedExportsPlugin() {
  return {
    name: 'gatherRemovedExportsPlugin',
    renderChunk(code, chunk) {
      for (const moduleKey in chunk.modules) {
        console.log(moduleKey, chunk.modules[moduleKey].removedExports);
      }
    },
  };
}
