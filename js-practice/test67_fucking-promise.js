(async function () {
  const p = await Promise.resolve()
    .then(() => {
      console.log(1);
    })
    .then(() => {
      console.log(2);
    })
    .then(() => {
      console.log(3);
    })
    .then(() => {
      console.log(5);
    })
    .then(() => {
      console.log(6);
      return Promise.resolve(7);
    })
    .then((res) => {
      console.log(res);
      return Promise.resolve('ok');
    });

  console.log(p);
})();
