function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  let rst;
  if (Array.isArray(obj)) {
    rst = [];
  } else {
    rst = {};
  }

  for (let key in obj) {
    // 消除原型链的影响
    if (obj.hasOwnProperty(key)) {
      rst[key] = deepClone(obj[key]);
    }
  }

  return rst;
}
