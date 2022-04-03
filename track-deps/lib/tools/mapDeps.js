function mapDeps(deps, [srcDirKeyword, desDirKeyword]) {
  return deps
    .filter((dep) => dep.path.endsWith('.js'))
    .map((dep) => ({
      originPath: dep.path,
      migratedPath: dep.path.replace(srcDirKeyword, desDirKeyword),
      usedExports: uniUsedExports(dep.usedExports),
    }));
}

function uniUsedExports(usedExports) {
  const DEFAULT_EXPORTS_NAME = 'default';
  if (Array.isArray(usedExports)) {
    return usedExports.filter((varName) => varName !== DEFAULT_EXPORTS_NAME);
  }

  return [];
}

module.exports = { mapDeps };
