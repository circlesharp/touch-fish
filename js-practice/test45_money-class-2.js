class Money {
  constructor(value, isCent = false, divide) {
    if (isCent) {
      this.value = Math.round(+value);
      this.label = this._cent2label(this.value, divide);
    } else {
      this.value = this._label2cent(value + '');
      this.label = this._cent2label(this.value, divide);
    }
  }

  _label2cent(label) {
    const value = Math.round(label * 100);
    return value;
  }

  _cent2label(cent, divide) {
    let moneyStr = (cent / 100) + '';

    // 补齐小数点后两位
    if (/^(?!.*\.)/.test(moneyStr))
      // 不含小数点
      moneyStr =  `${moneyStr}.00`;
    if (/\..{1}$/.test(moneyStr))
      // 仅有小数点后一位
      moneyStr = `${moneyStr}0`;


    // 处理 千分位 / 万分位
    if (divide != null) {
      const regexp = new RegExp(`[1-9]\\d{0,${divide - 1}}(?=(\\d{${divide}})+$)`, 'g');
      const [integer, decimal] = moneyStr.split('.');
      moneyStr = [integer.replace(regexp, '$&,'), decimal].join('.');
    }

    return moneyStr;
  }
}

const testHelper = i => {
  const { label, value } = new Money(i);
  console.log(i, label, value);
};

// test 1 元，整数
const testCollection = [0, 1, 2, 100, 120, 1234, -1, -2, -100, -1234, -123456];
// testCollection.forEach(testHelper);

// test 2 分，整数
const testCollectionCent = [0, 1, 2, 100, 120, 1234, -1, -2, -100, -1234, -123456];
// testCollectionCent.forEach(i => {
//   const { label, value } = new Money(i, true);
//   console.log(i, label, value);
// });

// test 3 元，小数
const testCollection2 = [1.11, 1111.11, 22.00, 22.22, 0.01, 0.009, 0.001];
// testCollection2.forEach(testHelper);

// test 4 千分位
const testCollection3 = [11111.11, 22, 22222222222, 0.001, 123456789.125, 41876.44442222221];
testCollection3.forEach(i => {
  const { label, value } = new Money(i, true, 3);
  console.log(i, label, value);
});
