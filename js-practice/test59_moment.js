const moment = require('moment');

/* moment 与 时间戳 的转换 */
(function () {
  // 9位的时间戳
  let unix_9 = moment().unix();

  // 等价操作
  let unix_2_moment = moment.unix(1619596632);
  let unix_2_moment_2 = moment(1619596632, 'X');

  // 12位的时间戳
  let unix_12 = +unix_2_moment_2;

  console.log(unix_9, unix_2_moment, unix_2_moment_2, unix_12);
})();

/* 获取某个月份的第一天 */
(function () {
  let end = moment().format('YYYY-MM-DD');
  let start = moment().startOf('month').format('YYYY-MM-DD');

  console.log(start, end);
})();
