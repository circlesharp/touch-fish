/* 模拟一个 wx 方法 */
const myWx = function({ willItWork, success, fail }) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willItWork)
        resolve({info: 'success'});
      else
        reject({info: 'fail'});
    }, 1000);
  }).then(success, fail);
}

/* promisify */
const promisify = originFunction => (params = {}) =>
  new Promise((resolve, reject) => {
    originFunction({
      ...params,
      success: resolve,
      fail: reject,
    });
  });

/* 1 原生的调用 */
// myWx({
//   willItWork: true,
//   success({info}) {
//     console.log(info);
//   },
//   fail({info}) {
//     console.error(info);
//   },
// });

/* 2 转为 promisify */
// promisify(myWx)({ willItWork: false })
//   .then(console.log, console.error);

/* 3 使用 async */
(async function() {
  try {
    const rst = await promisify(myWx)({ willItWork: true })
    console.log(rst);
  }
  catch (err) {
    console.error(err.info)
  }

  console.log('finish');
})();