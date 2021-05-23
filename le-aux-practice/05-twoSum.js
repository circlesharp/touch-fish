/* 使用哈希表实现两数之和 */
const twoSum = (nums, target) => {
	let other;
	const index = {};
	for (let i = 0; i < nums.length; i++) {
		/* 后写入的会覆盖先写入的 */
		index[nums[i]] = i;
	}

	for (let i = 0; i < nums.length; i++) {
		other = target - nums[i];
		if (index.hasOwnProperty(other) && index[other] !== i) {
			return [i, index[other]];
		}
	}

	return [-1, -1];
};

/* class TwoSumAddFirst 插入频繁 */
class TwoSumAddFirst {
	constructor() {
		this.freq = {};
	}

	add(item) {
		if (this.freq.hasOwnProperty(item)) {
			this.freq[item] += 1;
		} else {
			this.freq[item] = 1;
		}
	}

	find(target) {
		let other;

		for (let key of Object.keys(this.freq)) {
			key = +key;
			other = target - key;

			/* other === key */
			if (other === key && this.freq[key] > 1) {
				return true;
			}

			/* other !== key */
			if (other !== key && this.freq.hasOwnProperty(other)) {
				return true;
			}
		}

		return false;
	}
}

class TwoSumFindFirst {
	constructor() {
		this.sum = new Set();
		this.nums = [];
	}

	add(item) {
		for (const num of this.nums) {
			this.sum.add(num + item);
		}
		this.nums.push(item);
	}

	find(value) {
		return this.sum.has(value);
	}
}

module.exports = {
	twoSum,
	TwoSumAddFirst,
	TwoSumFindFirst,
};
