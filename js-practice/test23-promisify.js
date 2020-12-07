const promisify = originFunction => (params = {}) =>
  new Promise((resolve, reject) => {
    originFunction({
      ...params,
      success: resolve,
      fail: reject,
    });
  });

{
  function test(options) {
    if (options.bool === true) options.success(`success: ${options.bool}`);
    else options.fail(`error: ${options.bool}`);
  }
  const promisifyTest = promisify(test);
  
  promisifyTest({ bool: true }).then(console.log).catch(console.error);
  promisifyTest({ bool: false }).then(console.log, console.error);
}
