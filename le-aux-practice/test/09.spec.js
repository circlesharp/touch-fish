const {
  RandomizedSet,
  RandomWithoutBlackList,
} = require('../09-O(1)InsertRemoveGetRandom');

beforeEach(() => {
  // jest.spyOn(global.Math, 'random').mockReturnValue(1234);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});


describe('结合哈希表和数组，使得数组查找和删除的时间复杂度稳定在 O(1)', () => {
  it('实现随机集合', () => {
    const randomSet = new RandomizedSet();

    expect(randomSet.insert(1)).toEqual(true);
    expect(randomSet.insert(1)).toEqual(false);
    expect(randomSet.insert(2)).toEqual(true);
    expect(randomSet.nums).toEqual([1, 2]);
    expect(randomSet.valToIndex).toEqual({ 1: 0, 2: 1 });

    expect(randomSet.remove(3)).toEqual(false);
    expect(randomSet.remove(1)).toEqual(true);
    expect(randomSet.nums).toEqual([2]);
    expect(randomSet.valToIndex).toEqual({ 2: 0 });

    expect(randomSet.insert(3)).toEqual(true);
    expect(randomSet.insert(4)).toEqual(true);
    expect(randomSet.insert(5)).toEqual(true);
    expect(randomSet.nums).toEqual([2, 3, 4, 5]);

    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
    expect(randomSet.getRandom()).toEqual(2);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.3);
    expect(randomSet.getRandom()).toEqual(3);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.6);
    expect(randomSet.getRandom()).toEqual(4);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.8);
    expect(randomSet.getRandom()).toEqual(5);
  });

  it('避开黑名单的随机数', () => {
    /* (5, [1,3]) => random(0,4,2) */
    const noBlakeList_1 = new RandomWithoutBlackList(5, [1, 3]);
    expect(noBlakeList_1.size).toEqual(3);
    expect(noBlakeList_1.map[1]).toEqual(4);

    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
    expect(noBlakeList_1.pick()).toEqual(0);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    expect(noBlakeList_1.pick()).toEqual(4);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
    expect(noBlakeList_1.pick()).toEqual(2);


    /* (5, [3,4]) => random(0,1,2) */
    const noBlakeList_2 = new RandomWithoutBlackList(5, [3, 4]);
    expect(noBlakeList_2.map).toEqual({ 3: -1, 4: -1 });


    /* (8, [0,5,7]) => random(6,1,2,3,4) */
    const noBlakeList_3 = new RandomWithoutBlackList(8, [0, 5, 7]);
    expect(noBlakeList_3.size).toEqual(5);
    expect(noBlakeList_3.map).toEqual({
      5: -1,
      7: -1,
      0: 6,
    });

    /* (8, [0,4,7]) => random(6,1,2,3,5) */
    const noBlakeList_4 = new RandomWithoutBlackList(8, [0, 4, 7]);
    expect(noBlakeList_4.map).toEqual({
      0: 6,
      4: 5,
      7: -1,
    });

    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
    expect(noBlakeList_4.pick()).toEqual(6);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.3);
    expect(noBlakeList_4.pick()).toEqual(1);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    expect(noBlakeList_4.pick()).toEqual(2);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.7);
    expect(noBlakeList_4.pick()).toEqual(3);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
    expect(noBlakeList_4.pick()).toEqual(5);
  });
});
