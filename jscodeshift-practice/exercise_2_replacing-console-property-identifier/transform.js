module.exports.parser = 'ts';

module.exports.default = function (fileInfo, api, { replaceRules }) {
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
    .find(j.Identifier)
    .filter((nodePath) => {
      const { node } = nodePath;
      return Object.keys(replaceRules).includes(node.name);
    });

  callExpressions.replaceWith((nodePath) => {
    const { node } = nodePath;
    node.name = replaceRules[node.name];

    return node;
  });

  return root.toSource();
};
