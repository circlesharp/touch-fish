class Timer {
  constructor() {
    this.reset();
  }

  reset() {
    this.head = 0;
    this.tail = 0;
    this.temp = 0;
  }

  start() {
    this.head = new Date().valueOf();
  }

  stop() {
    this.tail = new Date().valueOf();
    const temp = this.tail - this.head;
    if (this.head !== 0) {
      this.temp += temp;
    }
    this.head = 0;
    this.tail = 0;
  }

  show() {
    console.log(this.temp);
  }
}

(function () {
  const timer = new Timer();
  timer.start();
  setTimeout(() => {
    timer.stop();
    timer.show();

    timer.start();
    setTimeout(() => {
      timer.stop();
      timer.show();

      timer.reset();
      timer.start();
      setTimeout(() => {
        timer.stop();
        timer.show();

        // timer.reset();
      }, 30);
    }, 30);
  }, 30);
})();
