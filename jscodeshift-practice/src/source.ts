type Algo = (a: number, b: number) => number;

export const sum: Algo = (...args: [number, number]) => {
    console.log('calling sum with', args.toString());
    return args.reduce((t, c) => t + c, 0);
  },
  multiply = (a, b) => {
    console.warn('calling multiply with');
    return a * b;
  },
  hello = 'world';

const divide = (a, b) => {
    console.error(`calling divide with`);
    return a / b;
  },
  average = (a, b) => {
    console.log('calling average with ');
    return divide(sum(a, b), 2);
  },
  fuck = 'you';

export { average, divide };

export default { sum, average };
