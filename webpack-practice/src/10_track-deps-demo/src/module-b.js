// 副作用导出

const b1 = 'b1';
const b2 = () => console.log(b1, 'b2');

b2();

export { b1, b2 };
