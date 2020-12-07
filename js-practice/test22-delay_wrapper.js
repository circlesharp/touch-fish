const delayWrapper = (fun, delay = 1000) => {
  return (...args) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(fun(...args));
      }, delay);
    });
  };
};

const test = n => n;

const delayTest = delayWrapper(test);

delayTest(234).then(console.log);
