module.exports = function (fileInfo, api, { usedExports }) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  //----------------------------------------------
  // 分离及删除所有 ExploreNamedDeclaration
  //----------------------------------------------
  const exportNamedDeclarations = root.find(j.ExportNamedDeclaration);
  exportNamedDeclarations.replaceWith((nodePath) => {
    const { node: nodeExportNamedDeclarations } = nodePath;
    const { declaration: nodeDeclaration, comments } =
      nodeExportNamedDeclarations;

    // 如果导出的是对象字面量 {} => 直接去掉
    if (nodeDeclaration == null) return null;

    // 如果导出的是个表达式 => 直接替换这个表达式
    nodeDeclaration.comments = comments;

    return nodeDeclaration;
  });

  //----------------------------------------------
  // 新建全文唯一的 export 语句
  //----------------------------------------------
  const uniExportNode = j.exportNamedDeclaration(
    null,
    usedExports.map((name) =>
      j.exportSpecifier.from({
        exported: j.identifier(name),
        local: j.identifier(name),
      })
    )
  );

  //----------------------------------------------
  // 写入 export 语句
  //----------------------------------------------
  const exportDefaultDeclaration = root.find(j.ExportDefaultDeclaration);
  if (exportDefaultDeclaration.paths().length > 0) {
    exportDefaultDeclaration.insertBefore(uniExportNode);
  } else {
    root.get(0).node.program.body.push(uniExportNode);
  }

  return root.toSource();
};
