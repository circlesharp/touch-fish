/*
create a buffer

like Array.from
*/
const buf01 = Buffer.from('aaa!');

/*
allocate: alloc / allocUnsafe
*/
const buf02 = Buffer.alloc(1024);
buf02.write('fuck you!')

console.log(
  buf01.toString(),
  buf01.length,
  buf02[2], // string
);

/* iterate over the contents of a buffer */
for (const item of buf01) {
  console.log(item);
}

/*
cope
*/
const bufCopy = Buffer.alloc(2);
buf02.copy(bufCopy, 0, 0, 2);
console.log(
  bufCopy.toString(),
)

/*
slice
*/
const bufSlice = buf02.slice(2, 6)
console.log(
  bufSlice.toString()
)
