/**
 * 01
 * ok
 */
(function() {
  class TestObj {
    constructor() {
      this.num = 5;
    }
  
    func() {
      console.log(this.num);
    }
  }
  
  let testObj = new TestObj();
  testObj.func();
});


/**
 * 02
 * wrong!
 */
(function() {
  class TestObj {
    constructor() {
      this.num = 5;
    }
  
    func() {
      console.log(this.num);
    }
  }
  
  let testObj = new TestObj();
  const windowFunc = testObj.func;
  windowFunc();
});


/**
 * 03
 * react 做法 1
 */
(function() {
  class TestObj {
    constructor() {
      this.num = 5;
      this.func = this.func.bind(this);
    }
  
    func() {
      console.log(this.num);
    }
  }
  
  let testObj = new TestObj();
  const windowFunc = testObj.func;
  windowFunc();
});


/**
 * 04
 * react 做法 2
 * The problem with this syntax is that
 * a different callback is created each time.
 */
(function() {
  class TestObj {
    constructor() {
      this.num = 5;
    }
  
    func() {
      console.log(this.num);
    }
  }
  
  let testObj = new TestObj();
  const windowFunc = () => testObj.func();
  windowFunc();
});


/**
 * 05
 * react 做法 3
 * *experimental* syntax: public class fields
 */
(function() {
  class TestObj {
    constructor() {
      this.num = 5;
    }
  
    /* Warning: this is *experimental* syntax. */
    func = () => {
      console.log(this.num);
    }
  }
  
  let testObj = new TestObj();
  const windowFunc = testObj.func;
  windowFunc();
});
