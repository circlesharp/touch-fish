const r = 'red';
const b = 'blue';
const g = 'green';

const str = 'iamgreen'

const reg_1 = /(red|blue|green)/;
const rst_1 = reg_1.test(str);

const reg_2 = new RegExp(`(${r}|${b}|${g})`);
const rst_2 = reg_2.test(str);

console.log(rst_1, rst_2);
