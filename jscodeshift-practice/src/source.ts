type Algo = (a: number, b: number) => number;

export const sum: Algo = (...args: [number, number]) => {
  console.log('calling sum with', args.toString());
  return args.reduce((t, c) => t + c, 0);
};

export const multiply = (a, b) => {
  console.warn('calling multiply with');
  return a * b;
};

export const divide = (a, b) => {
  console.error(`calling divide with`);
  return a / b;
};

export const average = (a, b) => {
  console.log('calling average with ');
  return divide(sum(a, b), 2);
};
