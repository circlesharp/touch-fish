const isEmpty = arr =>
  arr.length === 0;

const first = arr =>
  Array.from(arr)[0];

const rest = arr =>
  Array.from(arr).slice(1);

const cat = (headArr, ...arrs) =>
  [].concat(headArr, ...arrs);

const construct = (head, arr) =>
  [].concat(head, arr);

module.exports = {
  isEmpty,
  first,
  rest,
  cat,
  construct,
};
