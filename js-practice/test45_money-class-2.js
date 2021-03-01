class Money {
  constructor(value, isCent) {
    if (isCent) {
      this.value = +value;
      this.label = this._cent2label(this.value);
    } else {
      this.label = value + '';
      this.value = this._label2cent(this.label);
    }
  }

  _label2cent(label) {
    const value = Math.round(label * 100);
    return value;
  }

  _cent2label(cent) {
    let moneyStr = (cent / 100) + '';

    if (moneyStr.indexOf('.') === -1) {
      moneyStr = `${moneyStr}.00`;
    } else if (moneyStr.indexOf('.') === moneyStr.length - 2) {
      moneyStr = `${moneyStr}0`;
    }

    return `${moneyStr}`;
  }
}

// test 1 元，整数
const testCollection = [0, 1, 2, 100, 120, 1234, -1, -2, -100, -1234, -123456];
testCollection.forEach(i => {
  // console.log(new Money(i))
});

// test 2 分，整数
const testCollectionCent = [0, 1, 2, 100, 120, 1234, -1, -2, -100, -1234, -123456];
testCollectionCent.forEach(i => {
  // console.log(new Money(i, true))
});

// test 3 元，小数
const testCollection2 = [1.11, 1111.11, 22.00, 22.22];
testCollection2.forEach(i => {
  // console.log(new Money(i))
});
