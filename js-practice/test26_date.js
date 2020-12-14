const delayWrapper = require('./test22-delay_wrapper');

const date01 = new Date();
let date02;

delayWrapper(() => {
  date02 = new Date();
}, 1000)().then(() => {
  console.log(`data01: ${+date01}\ndata02: ${+date02}`);
});
