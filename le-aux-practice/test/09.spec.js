const {
  RandomizedSet
} = require('../09-O(1)InsertRemoveGetRandom');

beforeEach(() => {
  // jest.spyOn(global.Math, 'random').mockReturnValue(1234);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})


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

  // it('实现随机集合', () => {
  //   console.log(233);
  // })

});
