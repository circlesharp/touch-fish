class Money {
  constructor(money) {
    this.raw = parseInt(money);
    this.str = this._toString(this.raw);
  }

  _toString(money) {
    let moneyStr = (money / 100) + '';

    if (moneyStr.indexOf('.') === -1) {
      moneyStr = `${moneyStr}.00`;
    } else if (moneyStr.indexOf('.') === moneyStr.length - 2) {
      moneyStr = `${moneyStr}0`;
    }

    return `${moneyStr}`;
  }
}


const testCollection = [0, 1, 2, 100, 120, 1234, -1, -2, -100, -1234, -123456];
testCollection.forEach(i => {
  console.log(`${i}: ${new Money(i).raw}, ${new Money(i).str}`);
});
