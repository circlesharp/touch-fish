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

  function autorun(updater) {
    function wrapperUpdate() {
      activeUpdate = wrapperUpdate; // 闭包会保留在全局的作用域里面
      updater(); // 在 update 执行的过程中, dep.depend 执行, 更新 subscribers 集合
      activeUpdate = null;
    }
    wrapperUpdate();
  }

  /* test */
  const dep = new Dep()

  const updateFun = () => {
    dep.depend() // 无声无息地被注册依赖
    console.log('updated 1')
  }
  const updateFun2 = () => {
    dep.depend() // 无声无息地被注册依赖
    console.log('updated 2')
  }

  autorun(updateFun)
  autorun(updateFun2)
  dep.notify()  // 无声无息地被监测到变化
  dep.notify()  // 无声无息地被监测到变化
})();
