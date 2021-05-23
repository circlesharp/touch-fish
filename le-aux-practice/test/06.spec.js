const {
	binarySearchCC,
	binarySearchCO,
	getLeftBoundCO,
	getLeftBoundCC,
	getRightBoundCO,
	getRightBoundCC,
} = require('../06-binarySearch');

describe('二分查找', () => {
	it('寻找一个数 两边闭', () => {
		const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (let i = 0; i < nums.length; i++) {
			expect(binarySearchCC(nums, nums[i])).toEqual(i);
		}
		expect(binarySearchCC(nums, 10)).toEqual(-1);
	});

	it('寻找一个数 左闭右开', () => {
		const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (let i = 0; i < nums.length; i++) {
			expect(binarySearchCO(nums, nums[i])).toEqual(i);
		}
		expect(binarySearchCO(nums, 10)).toEqual(-1);
	});

	it('寻找左侧边界 左闭右开', () => {
		const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (let i = 0; i < nums.length; i++) {
			expect(getLeftBoundCO(nums, nums[i])).toEqual(i);
		}

		expect(getLeftBoundCO(nums, -1)).toEqual(-1);
		expect(getLeftBoundCO(nums, 5.5)).toEqual(-1);
		expect(getLeftBoundCO(nums, 10)).toEqual(-1);

		const numsRepeat = [0, 1, 2, 3, 4, 5, 5, 5, 5, 9];
		expect(getLeftBoundCO(numsRepeat, 5)).toEqual(5);
	});

	it('寻找左侧边界 两边闭', () => {
		const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (let i = 0; i < nums.length; i++) {
			expect(getLeftBoundCC(nums, nums[i])).toEqual(i);
		}

		expect(getLeftBoundCC(nums, -1)).toEqual(-1);
		expect(getLeftBoundCC(nums, 5.5)).toEqual(-1);
		expect(getLeftBoundCC(nums, 10)).toEqual(-1);

		const numsRepeat = [0, 1, 2, 3, 4, 5, 5, 5, 5, 9];
		expect(getLeftBoundCC(numsRepeat, 5)).toEqual(5);
	});

	it('寻找右侧边界 左闭右开', () => {
		const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (let i = 0; i < nums.length; i++) {
			expect(getRightBoundCO(nums, nums[i])).toEqual(i);
		}

		expect(getRightBoundCO(nums, -1)).toEqual(-1);
		expect(getRightBoundCO(nums, 5.5)).toEqual(-1);
		expect(getRightBoundCO(nums, 10)).toEqual(-1);

		const numsRepeat = [0, 1, 2, 3, 4, 5, 5, 5, 5, 9];
		expect(getRightBoundCO(numsRepeat, 5)).toEqual(8);
	});

	it('寻找右侧边界 左闭右开', () => {
		const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (let i = 0; i < nums.length; i++) {
			expect(getRightBoundCC(nums, nums[i])).toEqual(i);
		}

		expect(getRightBoundCC(nums, -1)).toEqual(-1);
		expect(getRightBoundCC(nums, 5.5)).toEqual(-1);
		expect(getRightBoundCC(nums, 10)).toEqual(-1);

		const numsRepeat = [0, 1, 2, 3, 4, 5, 5, 5, 5, 9];
		expect(getRightBoundCC(numsRepeat, 5)).toEqual(8);
	});
});
