/* 结合单调栈去重，使得字典序最小 */
/* 1. 要去重 */
/* 2. 不能打乱相对顺序 */
/* 3. 字典序最小 */

const Stack = require('../utils/Stack');

/* ('bcabc') => 'abc' */
/* ('cbacdcbc') => 'cbad' */
const removeDuplicateLetters_1 = letters => {
	let result = '';
	const stack = new Stack();
	const inStack = new Set();

	for (const char of letters) {
		if (inStack.has(char)) {
			continue;
		}

		stack.push(char);
		inStack.add(char);
	}

	while (!stack.empty()) {
		result = stack.pop() + result;
	}

	return result;
};

/* ('bcabc') => 'abc' */
/* ('cbacdcbc') => 'acdb' */
const removeDuplicateLetters_2 = letters => {
	let result = '';
	let char = '';
	const stack = new Stack();
	const inStack = new Set();
	const charLastIndex = {};

	for (let i = 0; i < letters.length; i++) {
		charLastIndex[letters[i]] = i;
	}

	for (let i = 0; i < letters.length; i++) {
		// 如果栈前面没有比自己大 放入
		// 如果有 且这个大的最后索引比这个数后 可以删除
		// 否则，将保留
		char = letters[i];

		while (!stack.empty() && stack.top() > char) {
			if (charLastIndex[stack.top()] >= i) {
				inStack.delete(stack.pop());
			} else {
				break;
			}
		}

		if (inStack.has(char)) {
			// 如果一系列处理后，发现还是重复了
			// 说明前面已经有了不能删除的破坏字典序的
			// 没得办法，维护之前顺序，这个 char 不能要
			continue;
		}

		inStack.add(char);
		stack.push(char);
	}

	while (!stack.empty()) {
		result = stack.pop() + result;
	}

	return result;
};

module.exports = {
	removeDuplicateLetters_1,
	removeDuplicateLetters_2,
};
