module.exports.parser = 'ts';

module.exports.default = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const callExpressions = root
    .find(j.CallExpression, {
      callee: {
        object: {
          name: 'console',
        },
      },
    })
    .find(j.Identifier, {
      name: 'warn',
    });

  callExpressions.replaceWith((nodePath) => {
    const { node } = nodePath;
    node.name = 'fuck';

    return node;
  });

  return root.toSource();
};
