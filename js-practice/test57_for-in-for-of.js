Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'bar';

// for in => 以任意顺序迭代对象的可枚举属性
// 0 1 2 foo arrCustom objCustom
for (const i in iterable)
  console.log(i);

// hasOwnProperty 枚举属性是对象自己的（不是继承的）
// 0 1 2 foo
for (const i in iterable)
  if (iterable.hasOwnProperty(i))
    console.log(i);

// for of => 遍历可迭代对象定义要迭代的数据
// 3 5 7
for (const i of iterable)
  console.log(i);
