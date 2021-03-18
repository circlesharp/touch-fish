class Money {
  constructor(value, isCent = false) {
    if (isCent) {
      this.value = +value;
      this.label = this._cent2label(this.value);
    } else {
      this.value = this._label2cent(value + '');
      this.label = this._cent2label(this.value);
    }
  }

  _label2cent(label) {
    const value = Math.round(label * 100);
    return value;
  }

  _cent2label(cent) {
    const moneyStr = (cent / 100) + '';

    if (/^(?!.*\.)/.test(moneyStr))
      // 不含小数点
      return `${moneyStr}.00`;
    else if (/\..{1}$/.test(moneyStr))
      // 仅有小数点后一位
      return `${moneyStr}0`;
    else
      return moneyStr;
  }
}

const testHelper = i => {
  const { label, value } = new Money(i);
  console.log(i, label, value);
};

// test 1 元，整数
const testCollection = [0, 1, 2, 100, 120, 1234, -1, -2, -100, -1234, -123456];
testCollection.forEach(testHelper);

// test 2 分，整数
const testCollectionCent = [0, 1, 2, 100, 120, 1234, -1, -2, -100, -1234, -123456];
testCollectionCent.forEach(i => {
  const { label, value } = new Money(i, true);
  console.log(i, label, value);
});

// test 3 元，小数
const testCollection2 = [1.11, 1111.11, 22.00, 22.22, 0.01, 0.009, 0.001];
// testCollection2.forEach(testHelper);
