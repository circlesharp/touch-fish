const { CrazyQueue } = require('../11-crazyStackAndQueue');

describe('crazy queue', () => {
  it('empty', () => {
    const queue = new CrazyQueue();
    expect(queue.empty()).toEqual(true);
  });

  it('add, size, top, delete', () => {
    const queue = new CrazyQueue();
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
