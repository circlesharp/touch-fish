/*
::: process.nextTick :::
nextTick 就是将函数放在本次的 call stack 的结尾
*/

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const nt = () => console.log('nextTick')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) => {
    resolve('I am fucking ES6 Job Queue!')
  }).then(console.log)
  process.nextTick(nt)
  baz()
}

foo()
