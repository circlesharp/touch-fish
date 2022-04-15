class UseMiddleWare {
  constructor() {
    this.stack = [];
  }

  use(...args) {
    for (const middleware of args) {
      this.stack.push(middleware);
    }
  }

  handle(target) {
    const next = () => {
      // 尽管用了 shift, 但还是栈, 因为里面的方法是先出后销毁
      const middleware = this.stack.shift();
      if (middleware) {
        middleware(target, next);
      }
    }

    next();
  }
}

module.exports = { UseMiddleWare };