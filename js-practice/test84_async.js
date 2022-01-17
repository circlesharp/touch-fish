async function a1() {
  console.log('a1');
  await a2();
  console.log('a1_e')
}

async function a2() {
  console.log('a2');
}

console.log('script start');
a1()
console.log('script end');

// ss a1 a2 se a1_e
