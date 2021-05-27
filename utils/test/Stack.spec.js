const Stack = require('../Stack');

describe('Stack', () => {
	it('empty', () => {
		const stack = new Stack();
		expect(stack.empty()).toEqual(true);
	});

	it('push, size, top, pop', () => {
		const stack = new Stack();
		const SIZE = 10;
		for (let i = 0; i < SIZE; i++) {
			stack.push(i);
		}
		expect(stack.size()).toEqual(SIZE);
		expect(stack.top()).toEqual(9);

		for (let i = 0; i < SIZE; i++) {
			expect(stack.pop()).toEqual(SIZE - 1 - i);
			expect(stack.size()).toEqual(SIZE - 1 - i);
		}
	});
});
