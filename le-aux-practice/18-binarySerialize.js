/* LeetCode 297 binary tree's serialize and deserialize */

const Queue = require('../utils/Queue');
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
		const dataArr = data.split(SEP);
		const root = SerializePreorder._Deserialize(dataArr);
		return root;
	}
	static _Deserialize(dataArr) {
		const rootValue = dataArr.shift();
		if (rootValue === NULL) {
			return null;
		}

		const root = TreeNode(+rootValue);
		root.left = SerializePreorder._Deserialize(dataArr);
		root.right = SerializePreorder._Deserialize(dataArr);

		return root;
	}
}

/* 使用后序遍历实现 */
class SerializePostorder {
	/* tree => string */
	static Serialize(root) {
		const result = [];
		SerializePostorder._Serialize(root, result);
		return result.join(SEP);
	}
	static _Serialize(root, result) {
		if (!root) {
			result.push(NULL);
			return;
		}

		SerializePostorder._Serialize(root.left, result);
		SerializePostorder._Serialize(root.right, result);

		result.push(root.data);
	}

	/* string => tree */
	static Deserialize(data) {
		const dataArr = data.split(SEP);
		return SerializePostorder._Deserialize(dataArr);
	}
	static _Deserialize(dataArr) {
		const rootValue = dataArr.pop();
		if (rootValue === NULL) {
			return null;
		}

		const root = TreeNode(+rootValue);
		root.right = SerializePostorder._Deserialize(dataArr);
		root.left = SerializePostorder._Deserialize(dataArr);

		return root;
	}
}

/* 使用层序遍历实现 */
class SerializeLevelorder {
	/* tree => string */
	static Serialize(root) {
		const queue = new Queue();
		const result = [];
		let node;

		queue.add(root);

		while (!queue.empty()) {
			node = queue.delete();

			if (node) {
				result.push(node.data);
			} else {
				result.push(NULL);
				continue;
			}

			queue.add(node.left);
			queue.add(node.right);
		}

		return result.join(SEP);
	}

	/* string => tree */
	static Deserialize(data) {
		const dataArr = data.split(SEP);
		const queue = new Queue();
		const root = TreeNode(+dataArr[0]);
		let node, childValue;

		queue.add(root);

		let i = 1;
		while (i < dataArr.length) {
			/* 取出一个结点，分别构造它的左右子结点 */
			node = queue.delete();

			/* 左节点 */
			childValue = dataArr[i++];
			if (childValue === NULL) {
				node.left = null;
			} else {
				node.left = TreeNode(+childValue);
				queue.add(node.left);
			}

			/* 右节点 */
			childValue = dataArr[i++];
			if (childValue === NULL) {
				node.right = null;
			} else {
				node.right = TreeNode(+childValue);
				queue.add(node.right);
			}
		}

		return root;
	}
}

module.exports = {
	SerializePreorder,
	SerializePostorder,
	SerializeLevelorder,
};
