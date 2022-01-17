const book = {};

Object.defineProperties(book, {
  _year: {
    writable: true,
    value: 2004,
    enumerable: false,
  },
  edition: {
    writable: true,
    value: 1,
    enumerable: true,
  },
  year: { 
    enumerable: true,
    get() {
      return this._year;
    },
    set(newVal) {
      if (newVal > 2004) {
        this._year = newVal;
        this.edition += newVal - 2004;
      }
    },
  }
});

console.log(
  book.edition,
  book.year,
);

book.year = 2022;

console.log(
  book.edition,
  book.year,
);

console.log(
  Object.getOwnPropertyDescriptor(book, 'edition'),
  Object.getOwnPropertyDescriptor(book, 'year'),
);

for (const key in book) {
  console.log(key, book[key]);
}

console.log(
  Object.keys(book),
  '_year' in book,
);