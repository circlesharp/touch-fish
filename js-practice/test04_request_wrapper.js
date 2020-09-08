function _request(method, bizContent, showLoading = true, msg) {
  console.log(method, bizContent, showLoading, msg)
}

// request('api', { page: 1 })

const requestWrapper = fun =>
  (...args) => {
    const firstParam = args[0];
    const isObjParam = args.length === 1 && Object.prototype.toString.call(firstParam) === '[object Object]';
    if (isObjParam) {
      args = [
        firstParam.method,
        firstParam.params,
        firstParam.showLoading,
        firstParam.msg,
      ];
    }

    return fun(...args)
  }

const request = requestWrapper(_request);

request(
  'consumer.cabinet.order.create',
  { CID: 112345 },
  false,
  '17665234119',
)

request()

request({
  method: 'consumer.cabinet.order.create',
  params: { CID: 112345 },
  // showLoading: false,
  // msg: '17665234119',
})
