module.exports.parser = 'ts';

module.exports.default = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const callExpressions = root.find(j.CallExpression, {
    callee: {
      object: {
        name: 'console',
      },
    },
  });

  callExpressions.remove();

  return root.toSource();
};
