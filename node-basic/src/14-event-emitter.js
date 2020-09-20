const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (...args) => {
  console.log('started', ...args);
});
eventEmitter.emit('start', 1, 2, 3);
