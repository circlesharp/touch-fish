import b from './b';

const unused = '未导出';
const aaa = 1;
const bbb = 2;
const ccc = 3;
const unused2 = '导出但未被依赖';
export { aaa, bbb };

export default `a ${b}`;
