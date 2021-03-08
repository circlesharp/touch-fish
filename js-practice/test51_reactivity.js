(function() {
  function convert(obj) {
    Object.keys(obj).forEach(key => {
      let internalValue = obj[key];
      Object.defineProperty(obj, key, {
        get() {
          console.log(`get: ${key}, ${internalValue}`);
        },
        set(newValue) {
          console.log(`set: ${key}, ${newValue}`);
          internalValue = newValue; // 怎么这么神奇。。。
        }
      });
    });
  }

  const obj = { foo: 123 }
  convert(obj)

  obj.foo // should log: 'getting key "foo": 123'
  obj.foo = 234 // should log: 'setting key "foo" to: 234'
  obj.foo // should log: 'getting key "foo": 234'
});


/**
 * Create a Dep class with two methods: depend and notify.
 * Create an autorun function that takes an updater function.
 * Inside the updater function, you can explicitly depend on an instance of Dep by calling dep.depend()
 * Later, you can trigger the updater function to run again by calling dep.notify().
 */
(function() {
  let activeUpdate = null;

  class Dep {
    constructor() {
      this.subscribers = new Set();
    }
    depend() {
      if (activeUpdate)
        this.subscribers.add(activeUpdate);
    }
    notify() {
      this.subscribers.forEach(sub => { sub() });
    }
  }

  function autorun(update) {
    function wrapperUpdate() {
      activeUpdate = wrapperUpdate;
      update(); // 在 update 执行的过程中, dep.depend 执行, subscribers 集合
      activeUpdate = null;
    }
    wrapperUpdate();
  }

  /* test */
  const dep = new Dep()
  const updateFun = () => {
    dep.depend()
    console.log('updated')
  }
  autorun(updateFun)
  dep.notify()
})();
