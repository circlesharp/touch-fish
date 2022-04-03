module.exports = function (fileInfo, api, { usedExports }) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  //-----------------------
  // 新建 export 语句
  //-----------------------
  const uniExportNode = j.exportNamedDeclaration(
    null,
    usedExports.map((name) =>
      j.exportSpecifier.from({
        exported: j.identifier(name),
        local: j.identifier(name),
      })
    )
  );

  //-----------------------
  // 写入 export 语句
  //-----------------------
  const exportDefaultDeclaration = root.find(j.ExportDefaultDeclaration);
  if (exportDefaultDeclaration.paths().length > 0) {
    exportDefaultDeclaration.insertBefore(uniExportNode);
  } else {
    root.get(0).node.program.body.push(uniExportNode);
  }

  return root.toSource();
};
