const handlePagingRepeat = require('./test39-paging_repeat');

/**
 * 处理分页时因数据库变动而导致分页数据重复(此时数据已合并)
 * @param {Array<Object>} concatedArr 请求分页后已经合并了的数据
 * @param {String} key
 * @param {Number} range
 */
const handlePagingRepeatConcated = (concatedArr, key = 'id', range = 10) => {
  const origin = Array.from(concatedArr);
  const appending = origin.splice(origin.length - range, range);
  
  return handlePagingRepeat(origin, appending, key, range);
};

module.exports = handlePagingRepeatConcated;
