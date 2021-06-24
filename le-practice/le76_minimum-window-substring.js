/* (string, string) => string */
const solution = (source, target) => {
  const windowMap = {};
  const targetMap = {};

  _genTargetMap(targetMap, target);

  let left = 0;
  let right = 0;

  let matchCount = 0;
  let start = 0;
  let minLength = +Infinity;

  let str = '';
  let len = 0;

  while (right < source.length) {
    /* 常规操作: 扩大窗口 */
    str = source[right];
    _mapAddOne(windowMap, str);
    right += 1;

    /* 附加操作: 计算是否需要缩小 */
    if (windowMap[str] === targetMap[str]) {
      matchCount += 1;
    }

    while (matchCount === Object.keys(targetMap).length) {
      /* 业务操作: 更新最小长度 及 对应的起始位置 */
      len = right - left;
      if (len < minLength) {
        minLength = len;
        start = left;
      }

      /* 常规操作: 缩小窗口 */
      str = source[left];
      windowMap[str] -= 1;
      left += 1;

      /* 附加操作: 计算是否需要继续缩小 */
      if (targetMap.hasOwnProperty(str) && windowMap[str] < targetMap[str]) {
        matchCount -= 1;
      }
    }
  }
  if (minLength === Infinity) {
    return '';
  }
  return source.slice(start, start + minLength);
}

const _genTargetMap = (map, target) => {
  for (const str of target) {
    _mapAddOne(map, str);
  }
}

const _mapAddOne = (map, key) => {
  if (!map.hasOwnProperty(key)) {
    map[key] = 0;
  }

  map[key] += 1;
}
