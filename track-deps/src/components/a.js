import b from './b';

const unused = '未导出';

export const aaa = 1,
  bbb = 2,
  ccc = 3;

export const unused2 = '导出但未被依赖';

export default `a ${b}`;
