export const identity = function<T>(item: T): T {
  return item;
}

function sayHello(name: string): void {
  console.log(`Hello, ${name}`);
}

export default sayHello;
