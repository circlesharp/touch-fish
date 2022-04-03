module.exports.parser = 'ts';

// variableDeclaration -> Array<variableDeclarator>
module.exports.default = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

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
