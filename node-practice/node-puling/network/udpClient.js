const dgram = require('dgram');

const messageContent = 'message from client';
const message = Buffer.alloc(messageContent.length, messageContent);

const client = dgram.createSocket('udp4');

client.send(message, 0, message.length, 41234, 'localhost', (err, bytes) => {
  client.close();
});
