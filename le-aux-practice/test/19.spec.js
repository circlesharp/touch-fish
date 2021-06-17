const Tree = require('../../utils/Tree');
const { _serialize, findDuplicateSubtrees } = require('../19-binaryTree(3)');

const serialize = _serialize;

describe('', () => {
	it('serialize case 1', () => {
		const arr = [1, null, 2, 3, 4, 5, null, 6, 7];
		const rst = '1,#,2,3,4,5,#,6,7,#,#,#,#,#,#';
		const tree = new Tree(arr);
		expect(serialize(tree.root)).toEqual(rst);
	});

	it('serialize case 2', () => {
		const arr = [1];
		const rst = '1,#,#';
		const tree = new Tree(arr);
		expect(serialize(tree.root)).toEqual(rst);
	});

	it('serialize case 3', () => {
		const arr = [2, 1, 11, 11, null, 1];
		const rst = '2,1,11,11,#,1,#,#,#,#,#';
		const tree = new Tree(arr);
		expect(serialize(tree.root)).toEqual(rst);
	});

	it('findDuplicateSubtrees case 1', () => {
		const arr = [2, 1, 11, 11, null, 1];
		const tree = new Tree(arr);
		const rst = findDuplicateSubtrees(tree.root);
		expect(rst.length).toEqual(0);
	});

	it('findDuplicateSubtrees case 2', () => {
		const arr = [1, 2, 3, 4, null, 2, 4, null, null, 4];
		const tree = new Tree(arr);
		const rst = findDuplicateSubtrees(tree.root);
		expect(rst.length).toEqual(2);
	});
});

