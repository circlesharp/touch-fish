module.exports = function (fileInfo, api, { depsInfo }) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  const usedExports = depsInfo.find(
    (info) => info.migratedPath === fileInfo.path
  ).usedExports;

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
  // 新建并写入全文唯一的 export 语句
  //----------------------------------------------
  if (usedExports.length !== 0) {
    const uniExportNode = j.exportNamedDeclaration(
      null,
      usedExports.map((name) =>
        j.exportSpecifier.from({
          exported: j.identifier(name),
          local: j.identifier(name),
        })
      )
    );

    const exportDefaultDeclaration = root.find(j.ExportDefaultDeclaration);
    if (exportDefaultDeclaration.paths().length > 0) {
      exportDefaultDeclaration.insertBefore(uniExportNode);
    } else {
      root.get(0).node.program.body.push(uniExportNode);
    }
  }

  //-----------------------
  // 拆分多声明语句
  //-----------------------
  const variableDeclarations = root.find(j.VariableDeclaration, {});
  variableDeclarations.replaceWith((nodePath) => {
    const { node: nodeVariableDeclaration, parent } = nodePath;

    // 如果是 `export const xxx, xxx`, 暂时不操作
    if (parent.node.type === 'ExportNamedDeclaration')
      return nodeVariableDeclaration;

    const { declarations: nodeVariableDeclaratorArr, kind } =
      nodeVariableDeclaration;

    const nodes = nodeVariableDeclaratorArr.map((variableDeclarator) =>
      j.variableDeclaration(kind, [variableDeclarator])
    );

    return nodes;
  });

  return root.toSource();
};
