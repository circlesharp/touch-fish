const {
  MonotonicQueue,
  maxSlidingWindow,
} = require('../15-monotonicQueue');

describe('monotonic queue && max sliding window', () => {
  it('monotonic queue', () => {
    const monotonicQueue = new MonotonicQueue();
    const inputNums = [3, 5, 3, 2, 1, 2, 4];
    const outputNums = [5, 4];
    for (let i = 0; i < inputNums.length; i++) {
      monotonicQueue.add(inputNums[i]);
    }
    expect(monotonicQueue._queue).toEqual(outputNums);
    expect(monotonicQueue.delete(3)).toEqual(undefined);
    expect(monotonicQueue.delete(4)).toEqual(undefined);
    expect(monotonicQueue.top()).toEqual(5);
    expect(monotonicQueue.delete(5)).toEqual(5);
    expect(monotonicQueue.top()).toEqual(4);
    expect(monotonicQueue.delete(4)).toEqual(4);
  });

  it('max sliding window', () => {
    /* ([1,3,-1,-3,5,3,6,7], 3) => [3,3,5,5,6,7] */
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
      .toEqual([3, 3, 5, 5, 6, 7]);
  })
});
