/* 用于模拟分页请求 */

/* 生成全部数据 */
const makeDB = size => {
  const db = [];
  for (let i = 0; i < size; i++)
    db.push({ id: i });
  
  return db;
};

/* 分页请求数据 */
const request = (params, db) => {
  const { page, pageSize } = params;
  const start = pageSize * (page - 1);
  const end = start + pageSize;
  return {
    total: db.length,
    data: db.slice(start, end),
  };
}

/**
 * 用于请求之后的拼接阶段 根据重复情况改动 append 再追加 到 accumulate
 * @param {Array} accumulate 累计的大数组
 * @param {Array} append 单次请求的小数组
 * @param {Number} size 需要检查的范围，不填则为追加的数组长度
 */
const eliminateRepeat = (accumulate, append, size) => {
  const len = accumulate.length;
  const checkSize = size || append.length;
  const eliminate = [];

  /* 识别出重复的 */
  for (let i = len - checkSize; i < len; i++) {
    if (i < 0) continue; // 有可能 len < checkSize
    for (let j = 0; j < checkSize; j++) {
      if (accumulate[i].id === append[j].id)
        eliminate.push(j);
    }
  }

  /* 倒序删除重复的 */
  for (let i = eliminate.length - 1; i >= 0; i--)
    append.splice(eliminate[i], 1);

  accumulate.push(...append);
}


/* 请求 1 10 */
{
  // const testDB = makeDB(100);
  // const rst_1_10 = request({ page: 1, pageSize: 10 }, testDB);
  // const pretty_1_10 = rst_1_10.data.map(i => i.id);
  // const rst_5_10 = request({ page: 5, pageSize: 10 }, testDB);
  // const pretty_5_10 = rst_5_10.data.map(i => i.id);
  // console.log(rst_1_10.total, pretty_1_10);
  // console.log(rst_5_10.total, pretty_5_10);
}

/* 数据库发生变动 */
{
  // const testDB = makeDB(100);
  // const rst_1_10 = request({ page: 1, pageSize: 10 }, testDB);
  // const pretty_1_10 = rst_1_10.data.map(i => i.id);
  // console.log(rst_1_10.total, pretty_1_10);
  // testDB.unshift({ id: 2221 });
  // const rst_2_10 = request({ page: 2, pageSize: 10 }, testDB);
  // const pretty_2_10 = rst_2_10.data.map(i => i.id)
  // console.log(rst_2_10.total, pretty_2_10);
}

/* 数据库发生变动 且剔除重复 */
{
  // const testDB = makeDB(100);
  // const requestRst = [];
  
  // const rst_1_10 = request({ page: 1, pageSize: 10 }, testDB);
  // eliminateRepeat(requestRst, rst_1_10.data);

  // testDB.unshift({ id: 2221 });
  
  // const rst_2_10 = request({ page: 2, pageSize: 10 }, testDB);
  // eliminateRepeat(requestRst, rst_2_10.data);

  // testDB.unshift({ id: 2222 });
  // testDB.unshift({ id: 2223 });
  // testDB.unshift({ id: 2224 });
  // testDB.unshift({ id: 2225 });

  // const rst_3_10 = request({ page: 3, pageSize: 10 }, testDB);
  // eliminateRepeat(requestRst, rst_3_10.data);

  // const rst_4_10 = request({ page: 4, pageSize: 10 }, testDB);
  // eliminateRepeat(requestRst, rst_4_10.data);

  // console.log(requestRst.map(i => i.id));
}
