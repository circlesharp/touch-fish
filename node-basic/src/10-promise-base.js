/*
::: creating a promise :::

A promise is commonly defined as a proxy for a value that will eventually become available.
*/
let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  // console.log('in promise')
  if (done) {
    // console.log('in resolve') // stack 
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});

isItDoneYet.then(console.log); // Job Queue
console.log(isItDoneYet);

/*
::: Promisifying :::
use a classic JavaScript function that takes a callback, and have it return a promise.
(但是，这个例子怎么体现呢？费解……)
*/
const fs = require('fs');
const getFile = fileName =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject (err);
        return;
      }
      resolve(data);
    });
  });
getFile('test')
  .then(console.log, console.log);
