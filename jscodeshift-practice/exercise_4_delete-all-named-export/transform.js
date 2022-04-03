module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

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

  return root.toSource();
};
