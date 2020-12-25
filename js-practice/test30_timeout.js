const timeoutID = setTimeout(() => {
  console.log('timeout')
}, 3000);

setTimeout(() => {
  clearTimeout(timeoutID);
  console.log('clearTimeout');
}, 1000);
