const {
	findSubString,
	findSubStringMinWindow,
	checkInclusion,
	checkInclusion_2,
	findAnagrams,
	lengthOfLongestSubstring,
} = require('../07-slidingWindow');

describe('滑动窗口', () => {
	it('在字符串S里面找出包含T所有字母的最小字串 - 暴力解法', () => {
		const S = "ADOBECODEBANCXYZ";
		const T = "ABC";

		expect(findSubString(S, T)).toEqual('BANC');
	});

	it('在字符串S里面找出包含T所有字母的最小字串 - 滑动窗口', () => {
		const S = "ADOBECODEBANCXYZ";
		const T = "ABC";

		expect(findSubStringMinWindow(S, T)).toEqual('BANC');
	});

	it('判断S2是否包含S1的排列', () => {
		expect(checkInclusion('ab', 'eidbaooo')).toEqual(true);
		expect(checkInclusion('ab', 'eidboaooo')).toEqual(false);
	});

	it('判断S2是否包含S1的排列 - 参考答案', () => {
		expect(checkInclusion_2('ab', 'eidbaooo')).toEqual(true);
		expect(checkInclusion_2('ab', 'eidboaooo')).toEqual(false);
	});

	it('找所有字母异位词', () => {
		expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
		expect(findAnagrams('cbaebacbacd', 'abc')).toEqual([0, 4, 5, 6, 7]);
	});

	it('最长无重复子串', () => {
		expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
		expect(lengthOfLongestSubstring('bbbbbbb')).toEqual(1);
		expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
	});
});
