// 题目描述
// 给定两个字符串 s 和 t，判断他们的编辑距离是否为 1。

// 注意：
// 满足编辑距离等于 1 有三种可能的情形：
// 往 s 中插入一个字符得到 t
// 从 s 中删除一个字符得到 t
// 在 s 中替换一个字符得到 t


// 解答要求
// 输入：两个字符串 s, t
// 输出：编辑距离是否为1，true 或者 false


// 样例
// 输入样例：ab acb
// 输出样例：true

// 输入样例：cab ad
// 输出样例：false

// 输入样例：1203 1213
// 输出样例：true


function calc(str1, str2) {
	let long = str1;
	let short = str2;
	if (str1.length < str2.length) {
		long = str2;
		short = str1;
	}

	/* 1 错位 */
	let count_1 = 0;
	for (let i = 0, j = 0; i < short.length; i++, j++) {
		if (short[i] === long[j]) {
			continue;
		} else {
			j += 1;
			count_1 += 1;
		}
	}
	if (count_1 === 1)
		return true;

	/* 2 错字 */
	if (str1.length !== str2.length) {
		return false;
	} else {
		let count = 0;
		for (let i = 0; i < str2.length; i++) {
			if (str1[i] !== str2[i])
				count += 1;
		}
		if (count !== 1)
			return false;
	}

	return true;
}


let cases = [
	['ab', 'acb'],
	['cab', 'ad'], // false
	['1203', '1213'],
	['abcdefg', 'abcdefg'], // false
	['abcdefg', 'abcdafg'],
	['abcdefg', 'abcdfg'],
	['abcdefg', 'abcdfga'],
];

for (const item of cases) {
	let [a, b] = item;
	console.log(
		calc(a, b)
	);
}
