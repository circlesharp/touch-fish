/**
 * 二分查找
 * 1. 寻找一个数
 * 2. 寻找左侧边界
 * 3. 寻找右侧边界
 */

/* 1.1 寻找一个数 [] */
const binarySearchCC = (nums, target) => {
	let left, right, mid;
	left = 0;
	right = nums.length - 1;

	while (left <= right) {
		mid = (left + right) / 2 | 0;
		if (target === nums[mid]) {
			return mid;
		} else if (target > nums[mid]) {
			left = mid + 1;
		} else if (target < nums[mid]) {
			right = mid - 1;
		}
	}

	return -1;
};

/* 1.2 寻找一个数 [) */
const binarySearchCO = (nums, target) => {
	let left, right, mid;
	left = 0;
	right = nums.length; // 如果 right = nums.length, 需要打补丁

	while (left < right) {
		/* 退出条件就是 left === right */
		mid = (left + right) / 2 | 0;
		if (target === nums[mid]) {
			return mid;
		} else if (target > nums[mid]) {
			left = mid + 1;
		} else if (target < nums[mid]) {
			right = mid;
		}
	}

	/* 打补丁 */
	/* 此时，用 left 和 right 都一样 */
	/* [k, k) 的情况下，没有比较 nums[k] 就退出 while 了 */
	// if (nums[left] === target) {
	// 	return left;
	// }

	return -1;
};


/* 2.1 寻找左侧边界 [) */
/* 左侧边界意义说明：前面有 n 个数比它大 */
const getLeftBoundCO = (nums, target) => {
	let left, right, mid;
	left = 0;
	right = nums.length;

	while (left < right) {
		mid = (left + right) / 2 | 0;
		if (nums[mid] === target) {
			/* 找到了可能的左边界，需要在左边继续缩小 */
			right = mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid;
		}
	}

	/* 判断不存在的情况（如果不加，能体现左侧边界的意义） */
	if (left === nums.length) {
		return -1;
	}
	if (nums[left] !== target) {
		return -1;
	}

	return left;
};

/* 2.2 寻找左侧边界 [] */
const getLeftBoundCC = (nums, target) => {
	let left, right, mid;
	left = 0;
	right = nums.length - 1;

	while (left <= right) {
		mid = (left + right) / 2 | 0;
		if (nums[mid] === target) {
			right = mid - 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		}
	}

	if (left === nums.length) {
		return -1;
	}
	if (nums[left] !== target) {
		return -1;
	}

	return left;
};

/* 3.1 寻找右侧边界 [) */
const getRightBoundCO = (nums, target) => {
	let left, right, mid;
	left = 0;
	right = nums.length;

	while (left < right) {
		mid = (left + right) / 2 | 0;
		if (nums[mid] === target) {
			left = mid + 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid;
		}
	}

	/* 退出循环的条件决定了 left === right */
	if (left - 1 === nums.length) {
		return -1;
	}
	if (nums[left - 1] !== target) {
		return -1;
	}

	return left - 1;
};

/* 3.1 寻找右侧边界 [] */
const getRightBoundCC = (nums, target) => {
	let left, right, mid;
	left = 0;
	right = nums.length - 1;

	while (left <= right) {
		mid = (left + right) / 2 | 0;
		if (nums[mid] === target) {
			left = mid + 1;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		}
	}

	if (left - 1 === nums.length) {
		return -1;
	}
	if (nums[left - 1] !== target) {
		return -1;
	}

	return left - 1;
};

module.exports = {
	binarySearchCC,
	binarySearchCO,
	getLeftBoundCO,
	getLeftBoundCC,
	getRightBoundCO,
	getRightBoundCC,
};
