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

/**
 * Create a Dep class with two methods: depend and notify.
 * Create an autorun function that takes an updater function.
 * Inside the updater function, you can explicitly depend on an instance of Dep by calling dep.depend()
 * Later, you can trigger the updater function to run again by calling dep.notify().
 */
(function() {


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
});


/**
 * observe() converts the properties in the received object and make them reactive. 
 * For each converted property, it gets assigned a Dep instance
 * which keeps track of a list of subscribing update functions,
 * and triggers them to re-run when its setter is invoked.
 * 
 * autorun() takes an update function and re-runs it
 * when properties that the update function subscribes to have been mutated.
 * An update function is said to be "subscribing" to a property
 * if it relies on that property during its evaluation.
 */
(function() {
  function observe(obj) {
    // 对 state 包裹之后，会遍历每一个字段
    // 每一个字段都拥有自己的 dep 实例
    // dep 实例拥有函数集合，depend() 能往集合添加函数，notify() 能执行集合的函数
    Object.keys(obj).forEach(key => {
      let internalValue = obj[key];
      let dep = new Dep();

      Object.defineProperty(obj, key, {
        get() {
          dep.depend(); // 在每一个用到该值的地方都注册依赖
          return internalValue;
        },
        set(newValue) {
          if (internalValue !== newValue) {
            internalValue = newValue;
            dep.notify(); // 每一次修改都触发
          }
        },
      })
    })
  }

  const state = {
    count: 0,
  };

  observe(state);

  autorun(() => {
    // 这个函数会被包裹，并调用一次
    // 这个函数调用时触发了 state.count 的 getter
    // 于是整个函数(准确来说，包裹他的函数 activeUpdate)就被添加到 这个属性的 dep实例 的函数集合中
    // 每当 state.count 遭遇修改，其 setter 被触发，dep实例 的函数集合被遍历调用
    console.log(`In some place (maybe in HTML), the count is: ${state.count}.`);
  })
  
  state.count++
  state.count = 233;
})();
