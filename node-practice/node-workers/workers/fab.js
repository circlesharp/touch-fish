function fab(n) {
  if (n < 2) {
    return n;
  }

  return fab(n - 1) + fab(n - 2);
}

module.exports = { fab };
