const regExp = /\([^\)]+\)/g;

const text = 'lsy(15013410124)';

const s = text.match(regExp)[0];
const rst = s.slice(1, s.length - 1);

console.log(rst);
