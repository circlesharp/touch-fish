/**
 * =====================================================
 * 滑动窗口框架
 * 
 * void slidingWindow(string source, string target):
 * 	map need, window
 *
 * 	for (char c in target):
 * 		need[c]++
 *
 * 	int left = 0, right = 0
 * 	int valid = 0
 * 
 * 	while (right < source.length) {
 * 		char c = s[right] // c will come into window
 * 		right++
 * 		...
 * 
 * 		debugIfNeeded(left, right)
 *
 * 		while (window needs shrink) {
 * 			char d = s[left] // d will die away from window
 * 			left++
 * 			...
 *
 * 		}
 * 	}
 * 
 * 
 * 要思考的问题
 * 
 * 1. 当移动 right (扩大窗口，加入元素), 应该更新哪些数据
 * 	=> 增加 window 计数器
 * 2. 什么条件下，窗口暂停增大，移动 left 缩小窗口
 * 	=> 当 valid 满足 need 的时候
 * 3. 当移动 left (缩小窗口，移出元素), 应该更新哪些数据
 * 	=> 减小 window 计数器
 * 4. 结果应该在窗口扩大还是缩小时更新
 * 	=> 收缩窗口的时候
 * 
 * =====================================================
 */

/* LeetCode 76 在字符串S里面找出包含T所有字母的最小字串 */
/* (S = "ADOBECODEBANC", T = "ABC") => "BANC" */
/* 1 两层循环 */
const findSubString = (source, target) => {
	let len = Infinity;
	let valid = 0;

	let result, subString, currentChar;

	let _need = {};
	let _current = {};

	for (let i = 0; i < target.length; i++) {
		_keyAddOne(_need, target[i]);
	}

	for (let i = 0; i < source.length; i++) {
		for (let j = i + 1; j <= source.length; j++) {
			subString = source.slice(i, j);

			/* 处理 valid */
			for (let k = 0; k < subString.length; k++) {
				currentChar = subString[k];
				if (_need.hasOwnProperty(currentChar)) {
					_keyAddOne(_current, currentChar);
					if (_need[currentChar] === _current[currentChar]) {
						valid += 1;
					}
				}
			}

			/* 处理最优解 */
			if (valid === Object.keys(_need).length) {
				if (j - i < len) {
					len = j - i;
					result = subString;
				}
			}

			/* 重置数据 */
			valid = 0;
			_current = {};
		}
	}

	return result;
};
/* 2 滑动窗口 */
const findSubStringMinWindow = (source, target) => {
	const _need = {};
	const _window = {};

	let valid = 0;
	let left = 0;
	let right = 0;

	let start;
	let len = Infinity;

	let comeInto, dieOut;

	for (let i = 0; i < target.length; i++) {
		_keyAddOne(_need, target[i]);
	}

	while (right < source.length) {
		/* 没走到尽头前，尽可能让子串达标 aka 可行解 */
		comeInto = source[right]; // 即将进入窗口
		right += 1;
		if (_need.hasOwnProperty(comeInto)) {
			_keyAddOne(_window, comeInto);
			if (_need[comeInto] === _window[comeInto]) {
				valid += 1;
			}
		}

		/* 达标后，尽可能让字串变短 aka 最优解 */
		while (valid === target.length) {
			if (right - left < len) {
				start = left;
				len = right - left;
			}
			dieOut = source[left]; // 将要告别窗口
			left += 1;
			if (_need.hasOwnProperty(dieOut)) {
				if (_need[dieOut] === _window[dieOut]) {
					valid -= 1;
				}
				_window[dieOut] -= 1;
			}
		}
	}

	return source.slice(start, start + len);
};

/* LeetCode 567 判断S2是否包含S1的排列 */
/* (S1 = 'ab', S2 = 'eidbaooo') => true */
/* (S1 = 'ab', S2 = 'eidboaooo') => false */
/* 3. 我的答案 */
const checkInclusion = (target, source) => {
	let left = 0;
	let right = 0;
	let _need = {};
	let _window = {};
	let valid = 0;

	let comeInto, dieOut;

	for (let i = 0; i < target.length; i++) {
		_keyAddOne(_need, target[i]);
	}

	while (right < source.length) {
		comeInto = source[right];
		right += 1;
		_keyAddOne(_window, comeInto);
		if (_need.hasOwnProperty(comeInto)) {
			if (_need[comeInto] === _window[comeInto]) {
				valid += 1;
			}
		}

		while (valid === Object.keys(_need).length) {
			if (Object.keys(_window).length === valid) {
				return true;
			}
			dieOut = source[left];
			left += 1;
			_window[dieOut] -= 1;
			if (_window[dieOut] === 0) {
				delete _window[dieOut];
			}
			if (_need.hasOwnProperty(dieOut)) {
				valid -= 1;
			}
		}
	}

	return false;
};
/* 4. 参考答案 */
const checkInclusion_2 = (target, source) => {
	let left = 0;
	let right = 0;
	let _need = {};
	let _window = {};
	let valid = 0;

	let comeInto, dieOut;

	for (let i = 0; i < target.length; i++) {
		_keyAddOne(_need, target[i]);
	}

	while (right < source.length) {
		comeInto = source[right];
		right += 1;
		if (_need.hasOwnProperty(comeInto)) {
			_keyAddOne(_window, comeInto);
			if (_need[comeInto] === _window[comeInto]) {
				valid += 1;
			}
		}

		/* 因为要求排列 所以长度相等的时候都要试一试缩小 */
		while (right - left === target.length) {
			if (valid === Object.keys(_need).length) {
				return true;
			}
			dieOut = source[left];
			left += 1;
			if (_need.hasOwnProperty(dieOut)) {
				if (_window[dieOut] === _need[dieOut]) {
					valid -= 1;
				}
				_window[dieOut] -= 1;
			}
		}
	}

	return false;
};

/* LeetCode 438 找所有字母异位词 */
/* ('cbaebabacd', 'abc') => [0, 6] */
const findAnagrams = (source, target) => {
	const result = [];
	let left, right, valid, _need, _window, comeInto, dieOut;
	left = 0;
	right = 0;
	valid = 0;
	_need = {};
	_window = {};

	for (let i = 0; i < target.length; i++) {
		_keyAddOne(_need, target[i]);
	}

	while (right < source.length) {
		comeInto = source[right];
		right += 1;
		if (_need.hasOwnProperty(comeInto)) {
			_keyAddOne(_window, comeInto);
			if (_window[comeInto] === _need[comeInto]) {
				valid += 1;
			}
		}

		while (right - left === target.length) {
			if (valid === Object.keys(_need).length) {
				result.push(left);
			}

			dieOut = source[left];
			left += 1;
			if (_need.hasOwnProperty(dieOut)) {
				if (_window[dieOut] === _need[dieOut]) {
					valid -= 1;
				}
				_window[dieOut] -= 1;
			}
		}
	}

	return result;
};

/* LeetCode 3 最长无重复子串 */
/* ('abcabcbb') => 3 (abc) */
/* ('bbbbbbb') => 1 (b) */
/* ('pwwkew') => 3 (wke) */
const lengthOfLongestSubstring = (source) => {
	let left = 0;
	let right = 0;
	let len = 0;
	let _window = {};
	let comeInto, dieOut;

	while (right < source.length) {
		comeInto = source[right];
		_keyAddOne(_window, comeInto);
		right += 1;
		while (_window[comeInto] === 2) {
			dieOut = source[left];
			left += 1;
			_window[dieOut] -= 1;
		}
		len = Math.max(len, right - left);
	}

	return len;
};

const _keyAddOne = (obj, key) => {
	if (obj.hasOwnProperty(key)) {
		obj[key] += 1;
	} else {
		obj[key] = 1;
	}
};

module.exports = {
	findSubString,
	findSubStringMinWindow,
	checkInclusion,
	checkInclusion_2,
	findAnagrams,
	lengthOfLongestSubstring,
};
