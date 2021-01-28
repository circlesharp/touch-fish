/* 模拟分页请求接口 */
class MockRequest {
  constructor(total, cb, delay = 500) {
    this.total = total;
    this.delay = delay;
    this.cb = (cb != null) ? cb : i => i;
    this.database = null;
    this._initDatabase();
  }

  // ========= 操作数据库 ===========
  _initDatabase() {
    const database = [];
    for (let i = 0; i < this.total; i++)
      database.push(this.cb(i));

    this.database = database;
  }
  unshiftDatabase(n) {
    const unshiftDatabase = [];
    for (let i = 0; i < n; i++)
      unshiftDatabase.push(this.cb(i + this.total));
    
    this.database = [...unshiftDatabase, ...this.database];
    this.total += n;
  }

  // ========= get 请求数据 ===========
  _get(params) {
    let rst = [];

    if (params == null || params.page == null) { // 不需要分页
      rst = this.database;
    } else { // 分页
      const { page, pageSize = 10 } = params;
      if (page < 1) return [];
      const start = pageSize * (page - 1);
      rst = this.database.slice(start, Math.min(this.total, start + pageSize));
    }

    return {
      data: {
        total: this.total,
        data: rst,
      },
      error_code: 0,
      error_msg: '',
    };
  }
  /* 同步获取数据 */
  asyncGet(params) {
    return this._get(params);
  }
  /* 异步获取数据 */
  get(params) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this._get(params));
      }, this.delay);
    });
  }
}

// ============ 示范 ==================

/* 同步调用 */
const test01 = () => {
  const request = new MockRequest(33);
  for (let i = 0; i <= 5; i++)
    console.log(request.asyncGet({ page: i }));
};

/* 异步调用 */
const test02 = async () => {
  const request = new MockRequest(33);
  request.get({ page: 1, pageSize: 6 }).then(console.log);
};

/* 自定义返回回调函数 */
const test03 = async () => {
  const cb = i => ({
    id: `testID: id-${i}`,
    balance: i * 100,
    from: 'tf-test',
  });

  const request = new MockRequest(33, cb);
  request.get({ page: 3 }).then(console.log);
};

/* 解决数据库增加记录导致分页出现重复 */
/* handlePagingRepeat */
const handlePagingRepeat = require('./test39-paging_repeat');
const test04 = () => {
  const request = new MockRequest(33, i => ({id: i + 1}));

  const res1 = request.asyncGet({ page: 1 }).data.data;

  request.unshiftDatabase(2);
  const res2 = request.asyncGet({ page: 2 }).data.data;

  request.unshiftDatabase(2);
  const res3 = request.asyncGet({ page: 3 }).data.data;
  
  const rst = handlePagingRepeat(handlePagingRepeat(res1, res2), res3);
  console.log(rst.map(i => i.id));
}

/* handlePagingRepeatConcated */
const handlePagingRepeatConcated = require('./test40-paging_repeat_concated');
const test05 = () => {
  const request = new MockRequest(33, i => ({id: i + 1}));

  const res1 = request.asyncGet({ page: 1 }).data.data;

  request.unshiftDatabase(2);
  const res2 = request.asyncGet({ page: 2 }).data.data;

  console.log(handlePagingRepeatConcated([...res1, ...res2]));
}

if (require.main === module) {
  // test01();
  // test02();
  // test03();
  // test04();
  test05();
}
