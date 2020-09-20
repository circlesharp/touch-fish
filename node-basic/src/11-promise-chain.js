const fetch = obj =>
  new Promise((resolve, reject) => {
    if (obj.fail) {
      reject('fail');
      return;
    }
    resolve(obj);
  });

const goodObj = {
  fail: true,
  status: 200,
  json() {
    return Promise.resolve('ok');
    // return 'ok';
  },
};

/*
::: chaining promise :::
1. A promise can be returned to another promise, creating a chain of promises.
2. In inside the catch() you raise an error, you can append a second catch() to handle it, and so on.
*/
const status = res => {
  if (res.status === 200) return Promise.resolve(res);
  return Promise.reject(res.status);
};
const json = res => res.json();

fetch(goodObj)
  .then(status)
  .then(json)
  .then(console.log)
  .catch(errMsg => Promise.reject(`I am sorry, ${errMsg}`))
  .catch(console.error);
