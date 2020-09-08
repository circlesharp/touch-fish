let a, c;

const test = async () => {
  a = await new Promise((res, rej) => {
    console.log('initiate...');
    rej(new Error('fuck'));
  })
    .then(() => '123')
    .catch(console.log);
  return a;
}

(async function() {
  const b = await test();
  console.log(a, b);
})();
