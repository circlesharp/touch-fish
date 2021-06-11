const Tree = require('../../utils/Tree');
const {
	SerializePreorder,
	SerializePostorder,
	SerializeLevelorder,
} = require('../18-binarySerialize');

describe('二叉树的序列化', () => {
	it('前序遍历实现 serialize', () => {
		const serialize = SerializePreorder.Serialize;

		const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const rst = '1,#,2,3,5,#,#,#,4,6,#,#,7,#,#';
		const tree = new Tree(arr);
		expect(serialize(tree.root)).toEqual(rst);
	});
	it('前序遍历实现 deserialize', () => {
		const serialize = SerializePreorder.Serialize;
		const deserialize = SerializePreorder.Deserialize;

		// const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const src = '1,#,2,3,5,#,#,#,4,6,#,#,7,#,#';
		const rst = [1, 2, 3, 4, 5, 6, 7];
		const root = deserialize(src);
		const tree = new Tree();
		tree.root = root;

		expect(tree.traversal()).toEqual(rst);
		expect(serialize(tree.root)).toEqual(src);
	});

	it('后序遍历实现 serialize', () => {
		const serialize = SerializePostorder.Serialize;

		const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const rst = '#,#,#,5,#,3,#,#,6,#,#,7,4,2,1';
		const tree = new Tree(arr);
		expect(serialize(tree.root)).toEqual(rst);
	});
	it('后序遍历实现 deserialize', () => {
		const serialize = SerializePostorder.Serialize;
		const deserialize = SerializePostorder.Deserialize;

		// const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const src = '#,#,#,5,#,3,#,#,6,#,#,7,4,2,1';
		const rst = [1, 2, 3, 4, 5, 6, 7];
		const root = deserialize(src);
		const tree = new Tree();
		tree.root = root;

		// console.log(root);
		expect(tree.traversal()).toEqual(rst);
		expect(serialize(tree.root)).toEqual(src);
	});

	it('层序遍历实现 serialize', () => {
		const serialize = SerializeLevelorder.Serialize;

		const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const rst = '1,#,2,3,4,5,#,6,7,#,#,#,#,#,#';
		const tree = new Tree(arr);
		expect(serialize(tree.root)).toEqual(rst);
	});
	it('层序遍历实现 deserialize', () => {
		const serialize = SerializeLevelorder.Serialize;
		const deserialize = SerializeLevelorder.Deserialize;

		// const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const src = '1,#,2,3,4,5,#,6,7,#,#,#,#,#,#';
		const rst = [1, 2, 3, 4, 5, 6, 7];
		const root = deserialize(src);
		const tree = new Tree();
		tree.root = root;

		// console.log(root);
		expect(tree.traversal()).toEqual(rst);
		expect(serialize(tree.root)).toEqual(src);
	});
});
