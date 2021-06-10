/* LeetCode 297 binary tree's serialize and deserialize */

const Tree = require('../utils/Tree');
const TreeNode = Tree._GetNode;

const SEP = ',';
const NULL = '#';

/* 使用前序遍历实现 */
class SerializePreorder {
	/* tree => string */
	static Serialize(root) {
		const result = [];
		SerializePreorder._Serialize(root, result);
		return result.join(SEP);
	}
	static _Serialize(root, result) {
		if (!root) {
			result.push(NULL);
			return;
		}

		result.push(root.data);
		SerializePreorder._Serialize(root.left, result);
		SerializePreorder._Serialize(root.right, result);
	}

	/* string => tree */
	static Deserialize(data) {

	}
}

/* 使用后序遍历实现 */
class SerializePostorder {
	/* tree => string */
	static Serialize(root) {

	}

	/* string => tree */
	static Deserialize(data) {

	}
}

/* 使用层序遍历实现 */
class SerializeLevelorder {
	/* tree => string */
	static Serialize(root) {

	}

	/* string => tree */
	static Deserialize(data) {

	}
}

module.exports = {
	SerializePreorder,
	SerializePostorder,
	SerializeLevelorder,
};
