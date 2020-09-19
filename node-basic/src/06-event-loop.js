const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) => {
    resolve('I am fucking ES6 Job Queue!')
  }).then(console.log)
  baz()
}

foo()
