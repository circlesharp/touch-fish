const Tree = require('../../utils/Tree');
const {
	SerializePreorder,
} = require('../18-binarySerialize');

describe('二叉树的序列化', () => {
	it('前序遍历实现', () => {
		const serialize = SerializePreorder.Serialize;

		const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const rst = '1,#,2,3,5,#,#,#,4,6,#,#,7,#,#';
		const tree = new Tree(arr);
		expect(serialize(tree.root)).toEqual(rst);
	});
});
