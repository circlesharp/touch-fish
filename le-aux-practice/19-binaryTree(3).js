/* LeetCode 652 寻找重复的子树 */
/* 给定一棵二叉树，返回所有重复的子树。 */
/* 对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。 */

const findDuplicateSubtrees = root => {
	const serializeMap = {};
	const result = [];

	_findDuplicate(root, serializeMap, result);

	return result;
};

const _findDuplicate = (root, serializeMap, result) => {
	if (!root) {
		return;
	}

	_findDuplicate(root.left, serializeMap, result);
	_findDuplicate(root.right, serializeMap, result);

	const serializeStr = _serialize(root);
	// console.log(root.data, serializeStr);
	if (serializeMap.hasOwnProperty(serializeStr)) {
		serializeMap[serializeStr] += 1;
		if (serializeMap[serializeStr] === 2) {
			result.push(root);
		}
	} else {
		serializeMap[serializeStr] = 1;
	}
};

const _serialize = (root) => {
	const NULL = '#';
	const result = [];
	const queue = [];
	let node;

	queue.push(root);

	while (queue.length) {
		node = queue.shift();

		if (!node) {
			result.push(NULL);
		} else {
			result.push(node.data);
			queue.push(node.left);
			queue.push(node.right);
		}
	}

	return result.join(',');
};

module.exports = {
	findDuplicateSubtrees,
	_serialize,
};
