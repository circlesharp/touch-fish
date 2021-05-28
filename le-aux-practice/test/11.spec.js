const {
	removeDuplicateLetters_1,
	removeDuplicateLetters_2,
} = require('../11-monoStackRemoveDuplicate');

describe('去重且保持字典序最小', () => {
	it('暂且满足两个要求：去重且相对位置不变', () => {
		/* ('bcabc') => 'bca' */
		expect(removeDuplicateLetters_1('bcabc')).toEqual('bca');
		/* ('cbacdcbc') => 'cbad' */
		expect(removeDuplicateLetters_1('cbacdcbc')).toEqual('cbad');
	});

	it('最终实现', () => {
		/* ('bcabc') => 'abc' */
		expect(removeDuplicateLetters_2('bcabc')).toEqual('abc');
		/* ('cbacdcbc') => 'acdb' */
		expect(removeDuplicateLetters_2('cbacdcbc')).toEqual('acdb');
	});
});
