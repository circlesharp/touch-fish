const {
  solution,
} = require('../27-dp(5)');

describe('扔鸡蛋问题', () => {
  it('无优化的直观解法', () => {
    const data = [
      [1, 9, 9],
      [2, 100, 14],
    ];

    for (const [k, n, rst] of data) {
      expect(solution(k, n)).toEqual(rst);
    }
  })
})
