const { CrazyQueue, CrazyStack } = require('../11-crazyStackAndQueue');

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

describe('crazy stack', () => {
  it('empty', () => {
    const stack = new CrazyStack();
    expect(stack.empty()).toEqual(true);
  });

  it('push, size, top, pop', () => {
    const stack = new CrazyStack();
    const SIZE = 10;
    for (let i = 0; i < SIZE; i++) {
      stack.push(i);
    }
    expect(stack.size()).toEqual(SIZE);
    expect(stack.top()).toEqual(9);

    for (let i = 0; i < SIZE; i++) {
      expect(stack.pop()).toEqual(SIZE - 1 - i);
      expect(stack.size()).toEqual(SIZE - 1 - i);
    }
  });
});
