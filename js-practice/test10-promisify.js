const promisify = originFunction =>
  (params = {}) =>
    new Promise((resolve, reject) => {
      originFunction({
        ...params,
        success: resolve,
        fail: reject,
      });
    });

const obj = {
  key: 'obj key',
  test(params) {
    const { bool } = params;
    if (bool) params.success(this.key);
    else params.fail(bool);
  }
}

obj.test({
  bool: true,
  success: console.log,
  fail: console.error,
});

/* Attention! 对象的方法记得 bind 该对象 */
const proTest = promisify(obj.test.bind(obj));
const t = proTest({bool: true}).then(console.log);
