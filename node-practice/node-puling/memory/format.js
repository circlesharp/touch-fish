function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(4)} MB`;
}

module.exports = {
  formatBytes,
}