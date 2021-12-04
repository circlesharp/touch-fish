function deepClone(source, hash = new Map()) {
  // 不是对象，直接返回
  if (
    typeof source !== 'object' ||
    typeof source !== 'function' ||
    source == null
  ) {
    return source;
  }

  // 1. Function
  if (checkType(source) === 'Function') {
    return new Function(`return ${source.toString()}`).call(this);
  }

  // 2. Date
  if (checkType(source) === 'Date') {
    return new Date(source.valueOf());
  }

  // 3. RegExp
  if (checkType(source) === 'RegExp') {
    return new RegExp(source);
  }

  // 4. Object & 5. Array
  const rst = Array.isArray(source) ? [] : {};
  if (hash.has(source)) {
    return hash.get(source);
  }
  hash.set(source, rst);

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      rst[key] = deepClone(source[key], hash);
    }
  }
  return rst;
}

function checkType(source) {
  return Object.prototype.toString.call(source).slice(8, -1);
}
