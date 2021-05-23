const { twoSum, TwoSumAddFirst, TwoSumFindFirst } = require('../05-twoSum');

describe('两数之和', () => {

	it('哈希表实现', () => {
		let nums = [3, 1, 3, 6];
		expect(twoSum(nums, 6)).toEqual([0, 2]);
		expect(twoSum(nums, 7)).toEqual([1, 3]);
		expect(twoSum(nums, 8)).toEqual([-1, -1]);
	});

	it('API - 插入频繁', () => {
		let nums = [3, 1, 3, 6];
		const api1 = new TwoSumAddFirst();
		for (let item of nums) {
			api1.add(item);
		}

		expect(api1.freq).toEqual({ 3: 2, 1: 1, 6: 1 });

		expect(api1.find(6)).toEqual(true);
		expect(api1.find(7)).toEqual(true);
		expect(api1.find(8)).toEqual(false);
	});

	it('API - 插入频繁', () => {
		let nums = [3, 1, 3, 6];
		const api2 = new TwoSumFindFirst();
		for (let item of nums) {
			api2.add(item);
		}

		expect(api2.nums).toEqual(nums);
		expect(Array.from(api2.sum).sort((a, b) => a - b))
			.toEqual([4, 6, 7, 9]);

		expect(api2.find(6)).toEqual(true);
		expect(api2.find(7)).toEqual(true);
		expect(api2.find(8)).toEqual(false);
	});
});
