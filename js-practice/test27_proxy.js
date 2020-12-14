/* 基础示例 */
/* get handler 的使用场景 */
{
  const handler = {
    get(obj, prop) {
      return prop in obj ? obj[prop] : 37;
    },
  };

  const p = new Proxy({}, handler);
  p.a = 1;
  p.b = undefined;

  console.log('a' in p, p.a);
  console.log('b' in p, p.b);
  console.log('c' in p, p.c);
}

/* 无操作转发代理 */
/* 代理会将所有应用到它的操作转发到这个对象上 */
{
  const target = {};
  const p = new Proxy(target, {});

  p.a = 37;
  console.log('a' in target, target.a);
}

/* 验证 */
/* set handler 的作用 */
{
  const validator = {
    set(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value))
          throw new TypeError('The age is not an integer');
        if (value > 200)
          throw new RangeError('The age seems invalid');
      }

      obj[prop] = value;

      return true;
    },
  };

  const person = new Proxy({}, validator);

  // person.age = 1100;
  // person.age = '100';
  person.age = 100;
  console.log(person.age);
}

/* test */
{
  class Node {
    constructor(data, idx = -1) {
      this.data = data;
      this.idx = idx;
    };
  }

  class List {
    constructor() {
      this.data = [];
      this.length = 0;
    };
    push(value) {
      this.data.push(new Node(value, this.length));
      this.length += 1;
    };
  }

  const list = new List();
  list.push(1);
  list.push(121);
  list.push(1222);
  console.log(list.data);
}
