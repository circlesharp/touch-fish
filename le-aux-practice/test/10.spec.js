const {
	nextGreatNumber,
	waitWarmer,
	waitWarmer_2,
	nextGreatNumberOfCircleArray,
} = require('../10-monotonicStack');

describe('单调栈', () => {
	it('Next Great Number', () => {
		/* ([2,1,2,4,3]) => [4,2,4,-1,-1] */
		expect(nextGreatNumber([2, 1, 2, 4, 3])).toEqual([4, 2, 4, -1, -1]);

		/* ([1,5,2,6,3,7,4,8,5]) => [5,6,6,7,7,8,8,-1,-1] */
		expect(nextGreatNumber([1, 5, 2, 6, 3, 7, 4, 8, 5])).toEqual([5, 6, 6, 7, 7, 8, 8, -1, -1]);
	});

	it('waitWarmer 至少等多少天才能等到一个更暖和的天气', () => {
		/* ([73,74,75,71,69,72,76,73]) => [1,1,4,2,1,1,0,0] */
		const i = [73, 74, 75, 71, 69, 72, 76, 73];
		const o = [1, 1, 4, 2, 1, 1, 0, 0];
		expect(waitWarmer(i)).toEqual(o);
		expect(waitWarmer_2(i)).toEqual(o);
	});

	it('Next Great Number 之循环数组', () => {
		/* ([2,1,2,4,3]) => [4,2,4,-1,4] */
		expect(nextGreatNumberOfCircleArray([2, 1, 2, 4, 3])).toEqual([4, 2, 4, -1, 4]);

		/* ([1,5,2,6,3,7,4,8,5]) => [5,6,6,7,7,8,8,-1,6] */
		expect(nextGreatNumberOfCircleArray([1, 5, 2, 6, 3, 7, 4, 8, 5])).toEqual([5, 6, 6, 7, 7, 8, 8, -1, 6]);
	});
});
