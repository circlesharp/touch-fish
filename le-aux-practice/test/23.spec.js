const {
  fabDP,
  changesDP,
} = require('../23-dp(1)');

describe('dp 01', () => {
  it('fabDP', () => {
    const fabArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    for (let i = 1; i < 10; i++) {
      expect(fabDP(i)).toEqual(fabArr[i]);
    }
  });

  it('changesDP', () => {
    const coins = [1, 2, 5];
    const changesArr = [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3];
    for (let i = 0; i <= 11; i++) {
      expect(changesDP(coins, i)).toEqual(changesArr[i]);
    }
  });
});