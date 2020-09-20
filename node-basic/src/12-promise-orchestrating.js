const first = new Promise((resolve, reject) => setTimeout(resolve, 500, 'first'));
const second = new Promise((resolve, reject) => setTimeout(resolve, 500, 'second'));

/* Promise.all */
// Promise.all([first, second])
//   .then(console.log);

/* Promise.race */
Promise.race([first, second])
  .then(console.log);

/*
::: Common errors :::

Uncaught TypeError: undefined is not a promise
new Promise() // not Promise()

UnhandledPromiseRejectionWarning
catch // not no catch
*/
