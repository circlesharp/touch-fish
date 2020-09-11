const {
  isEmpty,
  first,
  rest,
  cat,
  construct,
} = require('./tool');


const zip = (l, r) => {
  if (isEmpty(l)) return [];
  return construct([first(l), first(r)], zip(rest(l), rest(r)));
};

const unzip = zippedArr => {
  if (isEmpty(zippedArr)) return [[], []];
  const rst = unzip(rest(zippedArr));
  return [
    construct(first(zippedArr)[0], rst[0]),
    construct(first(zippedArr)[1], rst[1]),
  ];
}

console.log(
  zip([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), // => [ [ 1, 6 ], [ 2, 7 ], [ 3, 8 ], [ 4, 9 ], [ 5, 10 ] ]
  unzip([]),
  unzip([ [ 1, 6 ], [ 2, 7 ], [ 3, 8 ], [ 4, 9 ], [ 5, 10 ] ]),
);
