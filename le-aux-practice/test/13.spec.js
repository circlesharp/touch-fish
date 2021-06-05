const { PriorityQueue } = require('../13-binaryHeap');

describe('PriorityQueue', () => {
  it('insert', () => {
    const priorityQueue = new PriorityQueue();
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const rst = [
      [1],
      [2, 1],
      [3, 1, 2],
      [4, 3, 2, 1],
      [5, 4, 2, 1, 3],
      [6, 4, 5, 1, 3, 2],
      [7, 4, 6, 1, 3, 2, 5],
    ];
    for (let i = 0; i < arr.length; i++) {
      priorityQueue.insert(arr[i]);
      expect(priorityQueue.size()).toEqual(rst[i].length);
      expect(priorityQueue._getPQ()).toEqual(rst[i]);
      expect(priorityQueue.getMax()).toEqual(arr[i]);
    }
  });

  it('delete max', () => {
    const priorityQueue = new PriorityQueue();
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const rst = [
      [6, 4, 5, 1, 3, 2],
      [5, 4, 2, 1, 3],
      [4, 3, 2, 1],
      [3, 1, 2],
      [2, 1],
      [1],
      [],
    ];
    for (let i = 0; i < arr.length; i++) {
      priorityQueue.insert(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      expect(priorityQueue.deleteMax()).toEqual(arr[arr.length - 1 - i]);
      expect(priorityQueue._getPQ()).toEqual(rst[i]);
      expect(priorityQueue.size()).toEqual(rst[i].length);
    }
  });

  it('random test', () => {
    const priorityQueue = new PriorityQueue();
    const arr = [11, 2, 555, 3, 6646, 9, 1, 23, 56, 9090, 9090, 3];
    const rst = Array.from(arr).sort((a, b) => b - a);
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      priorityQueue.insert(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      result.push(priorityQueue.deleteMax());
    }

    expect(result).toEqual(rst);
  });

  it('random test with compareFn', () => {
    const priorityQueue = new PriorityQueue(100, i => i.weight);
    const arr = [11, 2, 555, 3, 6646, 9, 1, 23, 56, 9090, 9090, 3];
    const rst = Array.from(arr).sort((a, b) => b - a);
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      priorityQueue.insert({ weight: arr[i] });
    }
    expect(priorityQueue.size()).toEqual(arr.length);

    for (let i = 0; i < arr.length; i++) {
      result.push(priorityQueue.deleteMax().weight);
    }
    expect(priorityQueue.size()).toEqual(0);
    expect(result).toEqual(rst);
  });
});
