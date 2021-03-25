export const identity = function<T>(item: T): T {
  return item;
}

export class Man {
  kind = 'man'
  age: number

  constructor(age: number) {
    this.age = age;
  }

  say = (name: string): void => {
    console.log(`Hello, I'm ${name}, my age is ${this.age}`);
  }
}

function sayHello(age: number): void {
  const man = new Man(age);
  const manSay = man.say('Tom');
}

export default sayHello;