const fs = require('fs');

const content = 'Some content!';

/* writeFile */
/*
fs.writeFile('test', content, err => {
  if (err) { console.error(err); return; }
  console.log('write file succeed');
}); */

/* with flag */
/*
fs.writeFile('test', content, { flag: 'a+' }, err => {
  if (err) { console.error(err); return; }
  console.log('write file (a+) succeed');
}); */

/* appendFile */
fs.appendFile('test', content, err => {
  if (err) { console.error(err); return; }
  console.log('append file succeed');
})
