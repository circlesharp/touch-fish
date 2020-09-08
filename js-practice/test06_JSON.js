const json = '{"result":1, "count":42, "fuck":100}';
const obj = JSON.parse(json);
const obj2 = JSON.parse(json, (key, value) => {
  if (key === '') return value; // 最外层的 ''
  if (key === 'fuck') return undefined; // 删除该字段
  return ++value;
});

console.log(
  obj,
  obj2,
);

console.log(
  JSON.stringify(obj, null, 2),
  JSON.stringify(obj, ['result', 'count']),
);
