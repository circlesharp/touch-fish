/*
1. 1 2 3 4
2. a b c d
3. --name=joe 需要 minimist
*/

const minimist = require('minimist');

// const argv = process.argv.slice(2);
const argv = minimist(process.argv.slice(2));
console.log(argv);
