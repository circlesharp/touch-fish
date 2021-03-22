const objBus = [];
const arrBus = [];

function EventBus() {
  console.log('eventBus init...');
}

EventBus.prototype = {
  obj: {
    set(key, action) {
      if (key && action) {
        for (let i = 0, busLength = objBus.length; i < busLength; i += 1) {
          const tempMap = objBus[i];
          if (tempMap.k === key) objBus.splice(i, i);
        }
        objBus.push({
          k: key,
          v: action,
        });
      }
    },
    get(key) {
      if (key) {
        for (let i = 0, busLength = objBus.length; i < busLength; i += 1) {
          const map = objBus[i];
          if (map.k === key) return map.v();
        }
      }
      return null;
    },
  },
  arr: {
    push(key, action) {
      if (key && action) {
        arrBus.push({
          k: key,
          v: action,
        });
      }
    },
    pop(key) {
      if (key) {
        for (let i = 0, busLength = arrBus.length; i < busLength; i += 1) {
          const map = arrBus[i];
          if (map.k === key) map.v();
        }
      }
    },
  },
  emit(key, params) {
    // 触发 arrBus 对应的回调
    if (key) {
      for (let map of arrBus) {
        if (map.key === key) return map.handler(params);
      }
    }
    return new Promise(resolve => resolve());
  },
  on(key, handler) {
    // 往 arrBus 追加 key-handler 对
    if (key && handler) {
      arrBus.push({ key, handler });
    }
  },
};

(function() {
  const eventBus = new EventBus();

  eventBus.on('a', console.log);
  eventBus.on('a', console.log);
  eventBus.on('b', console.log);

  setTimeout(() => {
    eventBus.emit('a', 'A');
    eventBus.emit('b', 'B');
  }, 500);
})();
