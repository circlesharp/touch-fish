const regExp = /\((1[345678]\d{9})\)$/;

const text = 'lsy(zz)(15013410124)';

const s = text.match(regExp)[1];
// const rst = s.slice(1, s.length - 1);

console.log(s);
