/*
::: async & await :::
*/
const doSthAsync = () =>
  new Promise(resolve => setTimeout(() => resolve('I did something'), 1000));

const doSth = async () => {
  const rst = await doSthAsync();
  console.log(rst);
};

// doSth();
// console.log('pay first, please.')

/*
::: async means return a promise :::
*/
const aFun = async () => 'aFun1';
const aFun2 = async () => Promise.resolve('aFun2');

// aFun().then(console.log);
// aFun2().then(console.log);

/*
::: error :::
*/
const errRun = () => {
  return Promise.resolve('okk~');
  // return Promise.reject('error msg');
};

const awaitWrap = promise =>
  promise.then(res => [null, res]).catch(err => [err, null]);

(async function() {
  /* err 1 rude */
  // const rst = await errRun().catch(err => err);

  /* err 2 so-so */
  // const rst = await errRun().then(res => [null, res]).catch(err => [err, null]);

  /* err 3 grace wrapper */
  const rst = await awaitWrap(errRun());

  console.log(rst);
})();
