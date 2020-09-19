/* 
::: console.count :::
What happens is that count will count the number of times
a string is printed, and print the count next to it.
*/
const oranges = ['orange', 'orange'];
oranges.forEach(fruit => console.count(fruit));
console.count('orange')

/*
::: console.trace :::
It's useful to print the call stack trace of a function,
maybe to answer the question how did you reach that part of code.
*/
const function2 = () => console.trace();
const function1 = () => function2();
function1();

/*
::: console.time / .timeEnd :::
calculate how much time a function takes to run.
*/
const doSomething = () => console.log('test time speeds');
const doMore = () => { setTimeout(() => { console.log('do more') }, 1000) };
const measureDoingSomething = () => {
  console.time('doSomething()');
  doSomething();
  doMore(); // setTimeout 不算
  console.timeEnd('doSomething()');
};
measureDoingSomething();

/*
::: stdout / stderr :::
stdout -> console.log
stderr -> console.error
*/

/*
::: Color the output :::
[bash-colors / escape codes](https://gist.github.com/iamnewton/8754917)
Also, we can use the library Chalk.
*/
const printInYellow = n => console.log('\x1b[33m%s\x1b[0m', n);
printInYellow('fuck!');
const chalk = require('chalk');
console.log(chalk.yellow('yellow from chalk.'));

/*
::: progress bar :::
[progress](https://www.npmjs.com/package/progress)
*/
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) clearInterval(timer);
}, 100);
