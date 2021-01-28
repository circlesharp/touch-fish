/**
 * 处理分页时因数据库变动而导致分页数据重复
 * @param {Array<Object>} origin 请求前的数据
 * @param {Array<Object>} appending 请求得到的数据
 * @param {String} key 对比用的 key (要求数组项是对象)
 * @param {Number} range 比较范围
 */
const handlePagingRepeat = (origin, appending, key = 'id', range = 10) => {
  /* 要对比的key的列表 */
  const originKeys = origin
    .slice(Math.max(origin.length - range, 0), origin.length)
    .map(i => i[key]);

  /* 倒序遍历 */
  for (let i = Math.min(appending.length, range) - 1; i >=0 ;i--) {
    if (originKeys.includes(appending[i][key]))
      appending.splice(i, 1);
  }

  return [...origin, ...appending];
};

module.exports = handlePagingRepeat;
