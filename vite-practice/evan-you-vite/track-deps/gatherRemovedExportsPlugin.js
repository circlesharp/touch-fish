export function gatherRemovedExportsPlugin() {
  return {
    name: 'gatherRemovedExportsPlugin',
    renderChunk(code, chunk) {
      for (const moduleKey in chunk.modules) {
        const module = chunk.modules[moduleKey];
        const fileName = extraFilePath(moduleKey);
        console.log(fileName, module.renderedExports, module.removedExports);
      }
    },
  };
}

function extraFilePath(moduleKey) {
  if (!moduleKey) return '';

  const mark = '?';
  const markIdx = moduleKey.indexOf(mark);

  if (markIdx === -1) {
    return moduleKey;
  }

  return moduleKey.slice(0, markIdx);
}
