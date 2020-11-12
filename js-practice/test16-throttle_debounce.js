function throttle(fn, interval) {
  let last = 0;
  return (...args) => {
    const now = +new Date();
    if (now - last >= interval) {
      last = now;
      fn(...args);
    }
  };
}

function debounce (fn, delay) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
