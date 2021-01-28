/* 模拟分页请求接口 */
class MockRequest {
  constructor(total, cb, delay = 500) {
    this.total = total;
    this.delay = delay;
    this.cb = (cb != null) ? cb : ({ page, pageSize }, i) => `${i + 1} (${page}, ${pageSize})`;
  }

  _get(params) {
    const rst = [];

    /* 不需要分页 */
    if (params == null || params.page == null) {
      for (let i = 0; i < this.total; i++)
        rst.push(this.cb({ page, pageSize }, i));

      return rst;
    }

    const { page, pageSize = 10 } = params;
    /* 分页信息有误 */
    if (page < 1) return [];

    /* 处理分页数据 */
    const start = pageSize * (page - 1);
    for (let i = start; i < Math.min(this.total, start + pageSize); i++)
      rst.push(this.cb({ page, pageSize }, i));

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
  const cb = (_, i) => ({
    id: `testID: id-${i}`,
    balance: i * 100,
    from: 'tf-test',
  });

  const request = new MockRequest(33, cb);
  request.get({ page: 3 }).then(console.log);
};

if (require.main === module) {
  // test01();
  // test02();
  test03();
}
