const Queue = require('../Queue');

describe('Queue', () => {
  it('empty', () => {
    const queue = new Queue();
    expect(queue.empty()).toEqual(true);
  });

  it('add, size, top, delete', () => {
    const queue = new Queue();
    const SIZE = 10;
    for (let i = 0; i < SIZE; i++) {
      queue.add(i);
    }

    expect(queue.size()).toEqual(SIZE);
    expect(queue.top()).toEqual(0);

    for (let i = 0; i < SIZE; i++) {
      expect(queue.delete()).toEqual(i);
      expect(queue.size()).toEqual(SIZE - 1 - i);
    }
  })
})
